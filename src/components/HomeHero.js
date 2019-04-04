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
        <Section className="section">
          <div className="container">
          {/* <Modal
              isClicked={isClicked}
              platform={platform}
              handleClick={this.handleClick}
            /> */}
            {/* <div className="is-hidden-mobile">
              <div className="columns">
                <Wrapper className="column is-two-thirds">
                  <h1 className="title is-size-1 has-text-black has-text-centered-mobile">
                    {lang.heroTitle}
                  </h1>
                  <h2 className="subtitle is-size-5 has-text-black has-text-weight-light">
                    {lang.heroSubTitle}
                  </h2>

                  <StoreButtons className="columns">
                    <div className="column is-one-quarter">
                      <nav className="level is-mobile">
                        <div className="level-item has-text-centered has-text-black has-text-weight-semibold is-size-6 is-hidden-mobile">
                          <TextStyled className="">Get it now on</TextStyled>
                        </div>
                        <div className="level-item has-text-centered">
                          <a href="https://itunes.apple.com/us/app/dexwallet/id1434816150?ls=1&mt=8">
                            <img
                              src="/images/iOs_button@2x.png"
                              alt="ios"
                              data-platform="IOS"
                            />
                          </a>
                        </div>
                        <div className="level-item has-text-centered">
                          <a href="https://play.google.com/store/apps/details?id=io.dexlab.dexwallet">
                            <img
                              src="/images/Play_button@2x.png"
                              alt="google-play"
                              data-platform="Android"
                            />
                          </a>
                        </div>
                      </nav>
                    </div>
                  </StoreButtons>
                </Wrapper>
                <div className="column" />
              </div>
            </div> */}

            {/* mobile view alternate columns */}

            {/* <div className="is-hidden-tablet">
              <div className="columns">
                <div className="column" />
                <Wrapper className="column is-two-thirds">
                  <h1 className="title is-size-1 has-text-black has-text-centered-mobile">
                    The only Wallet you need.
                  </h1>
                  <h2 className="subtitle is-size-5 has-text-black has-text-weight-light">
                    Finally you can be in control of your assets, secure your
                    private keys and enjoy the power of blockchain in a new,
                    more free and fun way!
                  </h2>
                  <StoreButtons className="columns">
                    <div className="column is-one-quarter">
                      <nav className="level is-mobile">
                        <div className="level-item has-text-centered has-text-black has-text-weight-semibold is-size-6 is-hidden-mobile">
                          <TextStyled className="">Get it now on</TextStyled>
                        </div>
                        <div className="level-item has-text-centered">
                          <a href="https://itunes.apple.com/us/app/dexwallet/id1434816150?ls=1&mt=8">
                            <img
                              src="/images/iOs_button@2x.png"
                              alt="ios"
                              data-platform="IOS"
                            />
                          </a>
                        </div>
                        <div className="level-item has-text-centered">
                          <a onClick={this.handleClick}>
                            <img
                              src="/images/Play_button@2x.png"
                              alt="google-play"
                              data-platform="Android"
                            />
                          </a>
                        </div>
                      </nav>
                    </div>
                  </StoreButtons>
                  </Wrapper>
                  </div>
                  </div>
                  </div> */}
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
    );
  }
}

export default HomeHero;
