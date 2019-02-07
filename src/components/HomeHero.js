import React from 'react';
import styled from 'styled-components';

import lang from '../utils/lang';
import NewsletterNew from './NewsLetterNew';
import SocialIcons from './SocialMediaIcons';

const Container = styled.section`
  background: url(/images/header-bg-iphone.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 0rem;
  padding-bottom: 0rem;
  background-position: 0% 32%;
  @media only screen and (max-width: 600px) {
    background: url('/images/mobile-bg-iphone.png');
    background-size: cover;
    background-repeat: no-repeat;
    padding-bottom: 0rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    background: url('/images/ipad-bg.png');
    background-size: cover;
    padding-bottom: 0rem;
    background-position: 0% 0%;
  }
  @media screen and (min-width: 1024px) and (max-width: 1366px) {
    background-size: 125%;
    padding-bottom: 0rem;
    background-position: 0% 0%;
  }
  @media screen and (min-width: 1000px) and (max-width: 1024px) {
    background-size: 125%;
    padding-bottom: 0rem;
    background-position: 0% 0%;
  }

  .title {
    letter-spacing: -3px !important;
    font-family: 'Rubik', sans-serif;
    font-weight: 400 !important;
    @media only screen and (max-width: 600px) {
      font-size: 2.5rem !important;
      line-height: 1;
      letter-spacing: -3px !important;
    }
    @media screen and (min-width: 768px) and (max-width: 1000px) {
      font-size: 2.5rem !important;
      line-height: 1;
      letter-spacing: -3px !important;
    }
  }
  .subtitle {
    line-height: 1.7rem;
    width: 92%;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: -0.5px !important;
    @media only screen and (max-width: 600px) {
      line-height: 2.1rem;
      margin-top: 0rem !important;
      width: 100%;
    }
    @media only screen and (max-width: 1000px) and (min-width: 600px) {
      line-height: 2.1rem;
      padding: 0rem 1rem;
      margin-top: 0rem !important;
      width: 100%;
    }
  }
  #contact {
    border-bottom: 2px solid #000;
  }
`;

const Wrapper = styled.div`
  padding-top: 8%;
  @media only screen and (max-width: 600px) {
    padding-top: 120%;
  }
  @media screen and (min-width: 768px) and (max-width: 1000px) {
    padding-top: 64%;
  }
`;

class HomeHero extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false,
      platform: '',
    };
  }

  handleClick(e) {
    const { platform } = e.target.dataset;
    const { isClicked } = this.state;
    this.setState({
      isClicked: !isClicked,
      platform,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container className="section">
          <div className="container">
            <div className="is-hidden-mobile">
              <div className="columns">
                <Wrapper className="column is-two-thirds">
                  <h1 className="title is-size-1 has-text-black has-text-centered-mobile">
                    {lang.heroTitle}
                  </h1>
                  <h2 className="subtitle has-text-black">
                    {lang.heroSubTitle}{' '}
                    <a className="contact-us has-text-dark is-size-7 has-text-weight-bold is-uppercase">
                      <span id="contact">Contact Us</span>
                    </a>
                  </h2>
                  <NewsletterNew />
                  <SocialIcons />
                </Wrapper>
                <div className="column" />
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default HomeHero;
