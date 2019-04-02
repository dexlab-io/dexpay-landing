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
    margin-inline-start: 25px;
  }
  h2 {
    font-size: 1.2rem;
    line-height: 1.7rem;
    font-weight: 300;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 25px;
  }
`;

const SectionRight = ({ img, logo, header, text }) => (
  <Container className="columns">
    <div className="column is-4">
      <img src={img} alt={logo} />
    </div>
    <div className="column">
      <h1>{header}</h1>
      <h2>{text}</h2>
    </div>
  </Container>
);

export default SectionRight;
