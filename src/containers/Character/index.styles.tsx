import styled from 'styled-components';

export const CharacterInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #EBEBEB;
  text-align: center;
  justify-content: center;

  @media (min-width: 750px) {
    flex-wrap: nowrap;
    background: transparent;
    justify-content: left;
    text-align: left;
    max-width: 1400px;
    width: 95%;
    margin: 0 auto;
  }
`;

export const CharacterInfoData = styled.div`
  padding-left: 0;
  @media (min-width: 750px) {
    padding-left: 40px;
  }
`;

export const BackToListing = styled.a`
  text-align: center;
  display: block;
  @media (min-width: 750px) {
    text-align: left;
  }
`;