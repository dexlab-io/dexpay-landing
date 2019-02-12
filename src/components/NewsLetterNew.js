import React from 'react';
import styled from 'styled-components';

import NewsletterForm from './NewsletterForm';

const Container = styled.section`
  position: relative;
  padding: 4rem 0rem;
  .form {
    margin-left: 0rem;
    margin-right: 0rem;
  }
  .column {
    padding: 0rem;
  }
`;

const NewsLetterNew = () => (
  <Container className="section">
    <div className="container">
      <div className="columns form">
        <NewsletterForm isVisible />
        <br />
        <div className="column" />
      </div>
    </div>
  </Container>
);

export default NewsLetterNew;
