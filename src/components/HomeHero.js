import React from 'react';
import styled from 'styled-components';

import lang from '../utils/lang';
import NewsletterNew from './NewsLetterNew';
import SocialIcons from './SocialMediaIcons';

const Section = styled.section`
  background: url(/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  padding-bottom: 0px !important;
  padding: 0rem 1.5rem !important;
  position: relative;
  @media only screen and (max-width: 768px) {
    background: url(/images/mobilebg.png);
    background-position: top right;
    background-size: 100%;
    background-repeat: no-repeat;
    height: auto;
    position: relative;
  }
  img {
    @media only screen and (max-width: 768px) {
      width: 50%;
      height: 100%;
      margin-top: 10%;
    }
  }
  .logos {
    @media only screen and (max-width: 768px) {
      justify-content: center;
      display: flex;
      justify-items: center;
    }
  }
  .home-hero {
    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 20rem;
    }
  }
  .title {
    letter-spacing: -3px !important;
    font-family: 'Rubik', sans-serif;
    font-weight: 400 !important;
    @media only screen and (max-width: 768px) {
      text-align: left !important;
      font-size: 2.5rem !important;
      margin-top: -80%;
    }
  }
  .subtitle {
    line-height: 1.7rem;
    width: 92%;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: -0.5px !important;
    padding-right: 1rem;
    @media only screen and (max-width: 768px) {
      font-size: 15px;
      text-align: justify;
      width: 100%;
      padding-right: 0rem;
    }
  }
  #contact {
    border-bottom: 2px solid #000;
    @media only screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Wrapper = styled.div`
  padding-top: 8%;
  @media only screen and (max-width: 768px) {
    padding-top: 100%;
  }
  .logo {
    height: 118px;
    width: 175px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  figure {
    margin-top: -2.6rem;
    margin-left: 7rem;
    @media only screen and (max-width: 768px) {
      margin-left: 0rem;
      margin-top: -16.6rem;
    }
    img {
      width: 17rem;
      @media only screen and (max-width: 768px) {
        width: 15rem;
      }
    }
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
        <Section className="section">
          <div className="container">
            <figure className="image logos is-hidden-tablet">
              <img src="/images/logo/logo-2x.png" alt="Dexpay" />
            </figure>
            <div className="columns home-hero">
              <Wrapper className="column is-8 is-three-fifths">
                <figure className="image logo is-hidden-mobile">
                  <img src="/images/logo/logo-2x.png" alt="Dexpay" />
                </figure>
                <h1 className="title is-size-1 has-text-black has-text-centered-mobile">
                  {lang.heroTitle}
                </h1>
                <h2 className="subtitle has-text-black">
                  {lang.heroSubTitle}{' '}
                  <a
                    className="contact-us has-text-dark is-size-7 has-text-weight-bold is-uppercase"
                    href="mailto:getintouch@dexlab.io"
                    target="_blank"
                  >
                    <span id="contact">Contact Us</span>
                  </a>
                </h2>
                <NewsletterNew />
                <SocialIcons />
              </Wrapper>
              <ImageWrapper className="column">
                <figure className="image">
                  <img src="/images/iphone.png" alt="Iphone View" />
                </figure>
              </ImageWrapper>
            </div>
          </div>
        </Section>
      </React.Fragment>
    );
  }
}

export default HomeHero;
