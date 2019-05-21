import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  img {
    width: 45%;
  }
  h3 {
    font-size: 1.4rem;
    color: #000000;
    font-weight: 500;
    margin-top: 0.5rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 300;
    padding: 0rem 2rem;
  }
`;

const FeaturesComponent = ({ img, logo, header, text }) => (
  <Wrapper className="column">
    <img src={img} alt={logo} />
    <h3>{header}</h3>
    <p>{text}</p>
  </Wrapper>
);

export default FeaturesComponent;
