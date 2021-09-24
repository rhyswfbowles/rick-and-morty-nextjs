import Link from "next/link";
import React from 'react';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Meta from '../../components/_shared/Meta';
import SiteWrapper from '../../components/_shared/SiteWrapper';
import { BackToListing, CharacterInfo, CharacterInfoData } from "./index.styles";
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
      <Header className={styles['character--header']}>
        <SiteWrapper>
          <Title text="Rick and Morty" alignDesktop="left" alignMobile="center"/>
          <Link href="/" passHref>
            <BackToListing>&lt; Back to Character listing</BackToListing>
          </Link>
        </SiteWrapper>
      </Header>
      <CharacterInfo>
        <Avatar imageUrl={character.image} isRounded className={styles['character--avatar']}/>
        <CharacterInfoData>
          <Title text={character.name} alignDesktop="left" alignMobile="center" fontSizeEm="2"/>
          <p>
            Status: {character.status}<br /><br />
            Origin: {character.origin.name}
          </p>
        </CharacterInfoData>
      </CharacterInfo>
      <SiteWrapper>
        <h2>Location Details:</h2>
        <ul>
          <li>Name: {character.location ? character.location.name : "Unknown"}</li>
          <li>Type: {character.location ? character.location.type : "Unknown"}</li>
          <li>Dimension: {character.location ? character.location.dimension : "Unknown"}</li>
          <li>No. of Residents: {character.location ? character.location.noOfResidents : "Unknown"}</li>
        </ul>
        <h2>Episodes ({character.episodes.length}):</h2>
        <ul>
          <li>First appearance: {character.firstEpisode.name} ({character.firstEpisode.episode})</li>
          <li>First appearance air date: {character.firstEpisode.air_date}</li>
          <li>First appearance character count: {character.firstEpisode.characters.length}</li>
          <li>Last appearance: {character.lastEpisode.name} ({character.lastEpisode.episode})</li>
          <li>Last appearance air date: {character.lastEpisode.air_date}</li>
          <li>Last appearance character count: {character.lastEpisode.characters.length}</li>
        </ul>
      </SiteWrapper>
    </>
  );
};

export default CharacterContainer;
