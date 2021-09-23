import styled from 'styled-components';

interface ICharacterListItem {
  maxItemsPerRow: number;
}

export const CharacterListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const CharacterListItem = styled.li<ICharacterListItem>`
  width: calc(calc(100% / ${p => p.maxItemsPerRow}) - 20px);
  margin: 10px;
`;