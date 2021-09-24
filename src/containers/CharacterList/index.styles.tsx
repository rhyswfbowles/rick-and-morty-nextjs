import styled from 'styled-components';

export const CharacterListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 15px;
`;

export const CharacterListItem = styled.li`
  width: calc(calc(100% / 2) - 20px);
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 750px) {
    width: calc(calc(100% / 6) - 20px);
    margin: 40px 10px;
  }
`;

export const CharacterProfileLink = styled.a`
  padding: 10px 15px;
  background: #B7B7B7;
  width: 100%;
  text-align: center;
`;

export const CharacterMetaInfoWrapper = styled.div`
  min-height: 90px;
  padding: 10px 0;
  flex-grow: 1;
`;

export const CharacterMetaSpan = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  width: 100%;
  border: 0;
  border-radius: 0;
  background #B7B7B7;
  color: #000000;
  padding: 25px;
  margin-bottom: 20px;
  cursor: pointer;
`;