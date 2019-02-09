import React from 'react';
import styled from 'styled-components';

import lang from '../utils/lang';
import NewsletterNew from './NewsLetterNew';
import SocialIcons from './SocialMediaIcons';

const Container = styled.section`
  background: url(/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  padding-bottom: 0px !important;
  .title {
    letter-spacing: -3px !important;
    font-family: 'Rubik', sans-serif;
    font-weight: 400 !important;
  }
  .subtitle {
    line-height: 1.7rem;
    width: 92%;
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.4;
    letter-spacing: -0.5px !important;
    padding-right: 1rem;
  }
  #contact {
    border-bottom: 2px solid #000;
  }
`;

const Wrapper = styled.div`
  padding-top: 8%;
  .logo {
    height: 128px;
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
    }
    img {
      width: 17rem;
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
        <Container className="section">
          <div className="container is-fluid">
            <div className="columns">
              <Wrapper className="column is-three-fifths">
                <figure className="image logo">
                  <img src="/images/logo/logo-2x.png" alt="Dexpay" />
                </figure>
                <h1 className="title is-size-1 has-text-black has-text-centered-mobile">
                  {lang.heroTitle}
                </h1>
                <h2 className="subtitle has-text-black">
                  {lang.heroSubTitle}{' '}
                  <a
                    className="contact-us has-text-dark is-size-7 has-text-weight-bold is-uppercase"
                    href="info@dexlab.io"
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
        </Container>
      </React.Fragment>
    );
  }
}

export default HomeHero;
