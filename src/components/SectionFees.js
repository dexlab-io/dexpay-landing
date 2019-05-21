import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-top: 2rem;
  .container {
    background: #000000;
    height: 13.125rem;
  }
  .column {
    margin-top: 1rem;
  }
  h1 {
    font-size: 3.6rem;
    color: #ffffff;
  }
  p {
    color: white;
    font-weight: 300;
  }
`;

export default () => (
  <Container className="section">
    <div className="container">
      <div className="columns has-text-centered">
        <div className="column">
          <h1>$0</h1>
          <p>
            No setup cost.<br /> No subscription fee.
          </p>
        </div>
        <div className="column">
          <h1>1.5%</h1>
          <p>
            Clear fee. <br />Pay for what you use.
          </p>
        </div>
        <div className="column">
          <h1>1% $2</h1>
          <p>
            Fair cost for <br /> Fiat Off-Ramp
          </p>
        </div>
      </div>
    </div>
  </Container>
);
