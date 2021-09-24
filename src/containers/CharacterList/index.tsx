import https from 'https';
import Link from "next/link";
import React, { useState } from 'react';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Meta from '../../components/_shared/Meta';
import SiteWrapper from '../../components/_shared/SiteWrapper';
import { CharacterListItem, CharacterListWrapper, CharacterMetaInfoWrapper, CharacterMetaSpan, CharacterProfileLink, LoadMoreButton } from './index.styles';
import styles from './style.module.css';

/*
  In the spirit of keeping the project as bare bones as possible 
  i'm bypassing the ssl verification, as fetch requires https and absolute urls
  However in the real world, I would never do this
*/
const fetchOptions = {
  agent: new https.Agent({ rejectUnauthorized: false })
} as RequestInit;

interface ICharacterListProps {
  title: string;
  charactersList: Array<LickApi.ICharacter>;
}

const CharacterListContainer: React.FC<ICharacterListProps> = ({
  title,
  charactersList
}) => {

  const [isLoading, setIsLoading] = useState(false);
  const [characters, setCharacters] = useState(charactersList);
  const [nextPageNo, setNextPageNo] = useState(2);
  const [showLoadMore, setShowLoadMore] = useState(true);

  
  const loadMoreCharacters = async () => {
    setIsLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/characters?name=rick&status=alive&page=${nextPageNo}`, fetchOptions);
    const { results, info } = await res.json();

    if(!info.next) {
      setShowLoadMore(false)
    }
    setCharacters((prevState) => [
      ...prevState,
      ...results
    ]);
    setIsLoading(false);
    setNextPageNo(prevPage => prevPage + 1);
  }

  const LoadMoreComponent = ({}) => {
    return (
      <LoadMoreButton onClick={loadMoreCharacters}>
        {isLoading ? 'Loading...' : 'Load More'}
      </LoadMoreButton>
    )
  }

  return (
    <>
      <Meta title={title} />
      <Header className={styles['character-lister--header']}>
        <SiteWrapper>
          <Title text="Rick and Morty" />
        </SiteWrapper>
      </Header>
      <SiteWrapper>
        <CharacterListWrapper>
          {characters.map((char) => (
            <CharacterListItem
              key={char.id}
            >
              <Avatar imageUrl={char.image} />
              <CharacterMetaInfoWrapper>
                <CharacterMetaSpan><b>Name:</b><br />{char.name}</CharacterMetaSpan>
                <CharacterMetaSpan><b>Gender:</b><br />{char.gender}</CharacterMetaSpan>
                <CharacterMetaSpan><b>Species:</b><br />{char.species}</CharacterMetaSpan>
              </CharacterMetaInfoWrapper>
              <Link href={{ pathname: `/character/${char.id}` }} passHref>
                <CharacterProfileLink>View Profile</CharacterProfileLink>
              </Link>
            </CharacterListItem>
          ))}
        </CharacterListWrapper>
        { showLoadMore && <LoadMoreComponent />}
      </SiteWrapper>
    </>
  );
};

export default CharacterListContainer;

