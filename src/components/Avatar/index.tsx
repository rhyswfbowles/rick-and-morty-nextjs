import React from 'react';
import { AvatarImg } from './index.styles';

interface IAvatarProps {
  imageUrl: string;
  isRounded?: boolean;
  className?: string;
}

const Avatar: React.FunctionComponent<IAvatarProps> = ({
  imageUrl,
  isRounded = false,
  className
}) => {
  return (
    <>
      <AvatarImg className={className} src={imageUrl} rounded={isRounded} />
    </>
  );
};

export default Avatar;
