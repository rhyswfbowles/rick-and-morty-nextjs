import https from 'https';
import { NextPage } from 'next';
import CharacterListContainer from '../src/containers/CharacterList';

const fetchOptions = {
    agent: new https.Agent({ rejectUnauthorized: false })
} as RequestInit;

interface IListPage {
  characters: LickApi.ICharacter[];
}

const ListPage: NextPage<IListPage> = ({characters}) => {
  return <CharacterListContainer title="Character Listing" charactersList={characters}/>;
};

export const getServerSideProps = async ({req}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/characters?name=rick&status=alive`, fetchOptions);
  const { results } = await res.json();

  const characters: LickApi.ICharacter[] = results;

  return {
    props: {
      characters
    },
  }
}

export default ListPage;
