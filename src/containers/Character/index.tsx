import React from 'react';
import Avatar from '../../components/Avatar';
import Meta from '../../components/_shared/Meta';

interface ICharacterTemplateProps {
  title: string;
}

const CharacterContainer: React.FC<ICharacterTemplateProps> = ({
  title
}) => {
  return (
    <>
      <Meta title={title} />
      <Avatar imageUrl="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
    </>
  );
};

export default CharacterContainer;
