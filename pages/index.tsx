import https from 'https';
import { NextPage } from 'next';
import CharacterListContainer from '../src/containers/CharacterList';

const fetchOptions = {
    agent: new https.Agent({ rejectUnauthorized: false })
} as RequestInit;


const ListPage: NextPage = ({ characters }) => {
  return (
    <>
      <CharacterListContainer title="Character Listing" charactersList={characters}/>
    </>
  );
};

export async function getServerSideProps({req}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/characters?name=rick&status=alive`, fetchOptions);
  const { results: characters } = await res.json();

  return {
    props: {
      characters
    },
  }
}

export default ListPage;
