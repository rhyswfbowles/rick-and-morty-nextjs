import styled from 'styled-components';

interface ITitleH1 {
  alignDesktop?: string;
  alignMobile?: string;
  fontSizeEm?: string;
}

export const TitleH1 = styled.h1<ITitleH1>`
  text-align: ${ p => p.alignMobile ? p.alignMobile : 'center' };
  font-size: ${ p => p.fontSizeEm ? p.fontSizeEm + 'em' : '2.5em' };
  @media (min-width: 750px) {
    text-align: ${ p => p.alignDesktop ? p.alignDesktop : 'center' };
  }
`;