import React from 'react';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Meta from '../../components/_shared/Meta';
import SiteWrapper from '../../components/_shared/SiteWrapper';
import styles from './style.module.css';

interface ICharacterTemplateProps {
  title: string;
  character: LickApi.ICharacter
}

const CharacterContainer: React.FC<ICharacterTemplateProps> = ({
  title,
  character
}) => {
  return (
    <>
      <Meta title={title} />
      <Header className={styles['character-lister--header']}>
        <Title text="Rick and Morty" />
      </Header>
      <SiteWrapper>
        <Avatar imageUrl={character.image} isRounded />
        <h2>Location Details:</h2>
        <ul>
          <li>Name: {character.location.name}</li>
          <li>Type: {character.location.type}</li>
          <li>Dimension: {character.location.dimension}</li>
          <li>No. of Residents: {character.location.noOfResidents}</li>
        </ul>
      </SiteWrapper>
    </>
  );
};

export default CharacterContainer;
