import React from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import theme from '../utils/theme';
import lang from '../utils/lang';

const Container = styled.div`
  .field:not(:last-child) {
    margin-bottom: 0rem;
  }
  .field .input {
    border-radius: 2px !important;
  }
  .form-text {
    padding: 0 2px !important;
  }
  .columns {
    justify-content: left;
    justify-items: left;
    display: flex;
  }
  .column {
    width: 300px;
    padding: 10px !important;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }
  input {
    border-color: transparent;
    padding-bottom: calc(1.9em - 1px) !important;
    padding-top: calc(1.9em - 1px) !important;
    padding-left: calc(1.625em - 1px);
    box-shadow: inset 0 0px 0px rgba(0, 0, 0, 0);
    ::placeholder {
      color: #4a4a4a !important;
      font-size: 12px !important;
      font-weight: 100;
    }
  }
  .field.is-grouped > .control:not(:last-child) {
    @media only screen and (max-width: 600px) {
      margin-right: 0rem !important;
    }
  }
  .wrapper {
    float: left;
  }
  .wrapper {
    position: relative;
  }
  .wrapper input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    display: block;
  }
  .checkmark {
    position: absolute;
    top: 7px;
    left: 0;
    height: 0.75rem;
    width: 0.75rem;
    background-color: ${theme.textColorWhite};
    border-radius: 2px;
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
  .wrapper input:checked ~ .checkmark:after {
    display: block;
  }
  .wrapper .checkmark:after {
    left: 5px;
    top: -1px;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .input {
    border-radius: 0.1rem;
    border: 1px solid #d3cfcf;
  }
  .checkmark {
    border: 1px solid #000;
  }
`;

const CheckBoxTxt = styled.span`
  font-weight: 100;
  font-size: 0.625rem;
  padding-left: 1.2rem;
  color: #000;
`;

const LabelStyled = styled.label`
  line-height: 3rem;
  font-weight: 100;
  justify-content: left;
  @media only screen and (max-width: 768px) {
    justify-content: left;
    display: -webkit-box;
  }
`;

const ButtonWrapper = styled.button`
  background-color: #00ffc7 !important;
  padding-left: 1.5em !important;
  padding-right: 1.5em !important;
  font-weight: ${theme.fontMedium};
  border-radius: 2px !important;
  transition: 0.5s;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  :hover {
    background-color: #40bc9f !important;
  }
`;

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };
  }

  // 2. via `async/await`
  handleSubmit = async e => {
    const { email } = this.state;
    e.preventDefault();
    const result = await addToMailchimp(email);
    this.setState({ email: '', message: result.msg });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 2000);
  };

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { message, email } = this.state;
    console.log('message', message);
    const { isVisible } = this.props;
    return (
      <Container className="has-text-white ">
        <form onSubmit={this.handleSubmit}>
          {isVisible ? (
            <LabelStyled className="has-text-black">
              Try the App now!
            </LabelStyled>
          ) : null}
          <div className="columns">
            <div className="column first">
              <div className="field is-grouped">
                <p className="control form-text is-expanded has-text-black">
                  <input
                    className="input is-medium is-size-7"
                    type="email"
                    value={email}
                    placeholder="Your@email.here"
                    onChange={this.handleChange}
                  />
                </p>
              </div>
              <label className="wrapper">
                <input type="checkbox" />
                <CheckBoxTxt className="is-size-7-mobile">
                  {lang.newsletterText}
                </CheckBoxTxt>
                <span className="checkmark" />
              </label>
              <br />
            </div>
            <div className="column">
              <p className="control">
                <ButtonWrapper
                  className="button is-info is-medium"
                  type="submit"
                  target="_parent"
                >
                  <span className="is-size-6 has-text-black">JOIN BETA</span>
                </ButtonWrapper>
              </p>
            </div>
          </div>
          <span className="has-text-dark">{message}</span>
        </form>
      </Container>
    );
  }
}

export default NewsletterForm;
