import Link from "next/link";
import React from 'react';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Meta from '../../components/_shared/Meta';
import SiteWrapper from '../../components/_shared/SiteWrapper';
import { CharacterListItem, CharacterListWrapper, CharacterMetaInfoWrapper, CharacterMetaSpan, CharacterProfileLink } from './index.styles';
import styles from './style.module.css';

interface ICharacterListProps {
  title: string;
  charactersList: Array<LickApi.ICharacter>;
}

const CharacterListContainer: React.FC<ICharacterListProps> = ({
  title,
  charactersList
}) => {
  return (
    <>
      <Meta title={title} />
      <Header className={styles['character-lister--header']}>
        <Title text="Rick and Morty" />
      </Header>
      <SiteWrapper>
        <CharacterListWrapper>
          {charactersList.map((char) => (
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
      </SiteWrapper>
    </>
  );
};

export default CharacterListContainer;

