import React from 'react';
import styled from 'styled-components';
import Card from '../card/Card';
import { useOpenseaApiContext } from '../../../hooks/useOpenseaApi';

const List = styled.ul`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;
  & > * {
    aspect-ratio: 1;
  }
`;

function CardList() {
  const { items } = useOpenseaApiContext();
  const limitOfCards = 16;
  const slouldShowCard = (index) => index < limitOfCards;
  // need display only 16 Cards
  const cards = items.map(
    // eslint-disable-next-line max-len
    ({ id, image_url, title }, index) => slouldShowCard(index) && <Card title={title} image={image_url} key={id} />,
  );

  return (
    <List>
      {cards}
    </List>
  );
}

export default CardList;
