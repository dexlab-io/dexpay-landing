import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .column {
  }
  .is-two-thirds {
    justify-content: left;
    display: flex;
  }
  .container {
    margin-left: -1.5rem !important;
  }
  .link {
    margin-right: 3rem !important;
  }
`;

const SocialIcons = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-two-thirds">
          <div className="level-item has-text-centered">
            <a className="link is-info" href="https://t.me/joindexlab">
              <img src="/images/social/icon_telegram.svg" alt="telegram" />
            </a>
          </div>
          <p className="level-item has-text-centered">
            <a className="link is-info" href="https://medium.com/dexlab-io">
              <img src="/images/social/icon_medium.svg" alt="medium" />
            </a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" href="https://twitter.com/dexlab_io">
              <img src="/images/social/icon_twitter.svg" alt="twitter" />
            </a>
          </p>
          <p className="level-item has-text-centered">
            <a className="link is-info" href="https://github.com/dexlab-io">
              <img src="/images/social/icon_github.svg" alt="github" />
            </a>
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default SocialIcons;
