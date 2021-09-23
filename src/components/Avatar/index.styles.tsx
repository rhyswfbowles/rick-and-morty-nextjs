import styled from 'styled-components';

interface IAvatarImg {
  rounded: boolean;
  src: string;
}

export const AvatarImg = styled.img<IAvatarImg>`
  border-radius: ${ p => p.rounded ? "50%" : "0" };
  width: 100%;
`;