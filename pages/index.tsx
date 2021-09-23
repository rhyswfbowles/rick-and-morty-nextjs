import { NextPage } from 'next';
import CharacterListContainer from '../src/containers/CharacterList';

const ListPage: NextPage = ({ characters }) => {
  return (
    <>
      <CharacterListContainer title="Character Listing" charactersList={characters} />
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const {results: characters} = await res.json();

  return {
    props: {
      characters,
    },
  }
}

export default ListPage;
