import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gold;
  background: rgb(63, 94, 251);
  background: radial-gradient(circle, rgb(25, 27, 28) 0%, rgb(134, 148, 239) 100%);
`;

const Card = ({ title, image }) => {
    return (
        <Container>
            <img src={image} alt={title}/>
        </Container>
    );
};

export default Card;