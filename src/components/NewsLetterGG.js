import React from 'react';
import styled from 'styled-components';

import NewsletterForm from './NewsletterForm';

const Container = styled.section`
  position: relative;
  padding: 5.68rem 0rem;
  @media only screen and (max-width: 600px) {
    padding-top: 7rem;
    padding-bottom: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding-bottom: 1rem;
    padding-top: 7.5rem;
  }
  .columns {
    margin-left: 0rem;
    margin-right: 0rem;
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      padding: 0rem 12rem;
    }
  }
`;

const NewsLetterGG = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <NewsletterForm isVisible />
        <br />
        <div className="column" />
      </div>
    </div>
  </Container>
);

export default NewsLetterGG;
