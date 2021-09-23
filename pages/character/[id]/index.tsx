import https from 'https';
import { NextPage } from 'next';
import CharacterContainer from '../../../src/containers/Character';


const CharacterPage: NextPage = ({character}) => {
  return <CharacterContainer title="Rick and Morty" character={character}></CharacterContainer>
};

export async function getServerSideProps({req, params}) {
  const res = await fetch(`${req.headers.host}/api/character/${params.id}`, {
      agent: new https.Agent({ rejectUnauthorized: true })
  } as RequestInit);
  const character = await res.json();

  return {
    props: {
      character,
    },
  }
}

export default CharacterPage;