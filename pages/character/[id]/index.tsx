import https from 'https';
import { NextPage } from 'next';
import CharacterContainer from '../../../src/containers/Character';

const fetchOptions = {
  agent: new https.Agent({ rejectUnauthorized: false })
} as RequestInit;

const getUrlIdPart = url => url.substring(url.lastIndexOf('/') + 1);

const CharacterPage: NextPage = ({character}) => {
  return <CharacterContainer title="Rick and Morty" character={character}></CharacterContainer>
};

export async function getServerSideProps({req, params}) {
  let locationMeta : LickApi.IRawApiLocation;
  let firstEpisode: LickApi.IEpisode;
  let lastEpisode: LickApi.IEpisode;

  const characterRes = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/character/${params.id}`, fetchOptions);
  const characterMeta = await characterRes.json();

  const locationId = getUrlIdPart(characterMeta?.location?.url);
  const firstEpisodeId = getUrlIdPart(characterMeta?.episode[0]);
  const lastEpisodeId = getUrlIdPart(characterMeta?.episode[characterMeta?.episode.length - 1]);

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