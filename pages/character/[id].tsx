import https from 'https';
import { NextPage } from 'next';
import CharacterContainer from '../../src/containers/Character';

interface ICharacterPage {
  character: LickApi.ICharacter;
}

/*
  In the spirit of keeping the project as bare bones as possible 
  i'm bypassing the ssl verification, as fetch requires https and absolute urls
  However in the real world, I would never do this
*/
const fetchOptions = {
  agent: new https.Agent({ rejectUnauthorized: false })
} as RequestInit;

const getUrlIdPart = url => url.substring(url.lastIndexOf('/') + 1);

const CharacterPage: NextPage<ICharacterPage> = ({character}) => {
  return <CharacterContainer title="Rick and Morty" character={character}></CharacterContainer>
};

export const getServerSideProps = async ({params}) => {
  let locationMeta : LickApi.IRawApiLocation;
  let firstEpisode: LickApi.IEpisode;
  let lastEpisode: LickApi.IEpisode;

  const characterRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/character/${params.id}`, fetchOptions);
  const characterMeta = await characterRes.json();

  const locationId = getUrlIdPart(characterMeta?.location?.url);
  const firstEpisodeId = getUrlIdPart(characterMeta?.episode[0]);
  const lastEpisodeId = getUrlIdPart(characterMeta?.episode[characterMeta?.episode.length - 1]);

  /*
    Alternative approach to be taken here:
    aggregation layer which builds up all the content for a character without hitting our own api
  */

  if(locationId) {
    const locationRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/location/${locationId}`, fetchOptions);
    locationMeta = await locationRes.json();
  }
  
  if(firstEpisodeId) {
    const firstEpisodeRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/episode/${firstEpisodeId}`, fetchOptions);
    firstEpisode = await firstEpisodeRes.json();
  }

    if(lastEpisodeId) {
    const lastEpisodeRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/episode/${lastEpisodeId}`, fetchOptions);
    lastEpisode = await lastEpisodeRes.json();
  }

  const character: LickApi.ICharacter = {
    ...characterMeta,
    location: locationMeta ? {
      ...locationMeta,
      noOfResidents: locationMeta.residents.length
    } : null,
    episodes: characterMeta.episode,
    firstEpisode,
    lastEpisode
  }

  return {
    props: {
      character,
    },
  }
}

export default CharacterPage;