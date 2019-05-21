import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 6rem;
  h1 {
    font-size: 3.6rem;
    line-height: 4rem;
    font-weight: 400;
    color: #000000;
    margin-top: 4.5rem;
    margin-right: ${props => props.margin};
  }
  h2 {
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 300;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-end: 65px;
  }
`;

const SectionLeft = ({ header, text, img, logo, margin }) => (
  <Container className="columns" margin={margin}>
    <div className="column">
      <h1>{header}</h1>
      <h2>{text}</h2>
    </div>
    <div className="column is-4">
      <img src={img} alt={logo} />
    </div>
  </Container>
);

export default SectionLeft;
