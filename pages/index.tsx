import https from 'https';
import { NextPage } from 'next';
import CharacterListContainer from '../src/containers/CharacterList';

/*
  In the spirit of keeping the project as bare bones as possible 
  i'm bypassing the ssl verification, as fetch requires https and absolute urls
  However in the real world, I would never do this
*/
const fetchOptions = {
    agent: new https.Agent({ rejectUnauthorized: false })
} as RequestInit;

interface IListPage {
  characters: LickApi.ICharacter[];
}

const ListPage: NextPage<IListPage> = ({characters}) => {
  return <CharacterListContainer title="Character Listing" charactersList={characters}/>;
};

export const getServerSideProps = async () => {
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
