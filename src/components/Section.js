import React from 'react';

import SectionLeft from './SectionLeft';
import SectionRight from './SectionRIght';
import FirstImage from '../../static/images/section/iphone.png';
import SecondImage from '../../static/images/section/qrcode.png';
import ThirdImage from '../../static/images/section/addbutton.png';
import FourthImage from '../../static/images/section/laptop.png';

export default () => (
  <section className="section">
    <div className="container">
      <SectionLeft
        header="Connecting people with merchants"
        text="Whether it's going to be in person or online, merchants will be able to start using Dexpay straight away and accept dozen of tokens from all major Ethereum Wallets."
        img={FirstImage}
        logo="iphone"
      />
      <SectionRight
        header="Share your personal payment page"
        text="Get tipped while online streaming, split a bill with friends or receive money from customers. Get paid on yourname.dexpay.me"
        img={SecondImage}
        logo="QR-code"
      />
      <SectionLeft
        header="Custom Item management"
        text="Create custom items and prices. Generate a multi-products bill in a matter of seconds."
        img={ThirdImage}
        logo="Add-Field"
        margin="4rem"
      />
      <SectionRight
        header="Ecommerce and freelance ready"
        text="With invoice links and e-commerce integration, it's never been so easy to receive crypto online."
        img={FourthImage}
        logo="desktop"
      />
    </div>
  </section>
);
