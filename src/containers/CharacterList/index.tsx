import React from 'react';
import Avatar from '../../components/Avatar';
import Meta from '../../components/_shared/Meta';
import { CharacterListItem, CharacterListWrapper } from './index.styles';

interface ICharacterListProps {
  title: string;
  charactersList: Array<LickApi.ICharacterCore>;
}

const CharacterListContainer: React.FC<ICharacterListProps> = ({
  title,
  charactersList
}) => {
  return (
    <>
      <Meta title={title} />
      <CharacterListWrapper>
        {charactersList.map((char) => (
          <CharacterListItem maxItemsPerRow={6}>
            <Avatar imageUrl={char.image} />
            Name: {char.name}<br />
            Gender: {char.gender}<br />
            Species: {char.species}<br />
            <b>View Profile</b>
          </CharacterListItem>
        ))}
      </CharacterListWrapper>
    </>
  );
};

export default CharacterListContainer;
