import React from 'react';
import { AvatarImg } from './index.styles';

interface IAvatarProps {
  imageUrl: string;
  isRounded?: boolean;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({
  imageUrl,
  isRounded = false
}) => {
  return (
    <>
      <AvatarImg src={imageUrl} rounded={isRounded} />
    </>
  );
};

export default Avatar;
