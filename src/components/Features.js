import React from 'react';

import FeaturesComponent from './FeaturesComponent';
import ImageOne from '../../static/images/features/setup.png';
import ImageTwo from '../../static/images/features/decentralised.png';
import ImageThree from '../../static/images/features/autoconversion.png';
import ImageFour from '../../static/images/features/lowfees.png';

export default () => (
  <section className="section">
    <div className="container">
      <div className="columns has-text-centered">
        <FeaturesComponent
          header="Simple Setup"
          img={ImageOne}
          alt="setup"
          text="You don't need a special device or skills"
        />
        <FeaturesComponent
          header="Decentralized"
          img={ImageTwo}
          alt="decentralised"
          text="Everything is operated by secure smart contracts"
        />
        <FeaturesComponent
          header="Auto conversion"
          img={ImageThree}
          alt="autoconversion"
          text="Swap automatically your token for a stablecoin"
        />
        <FeaturesComponent
          header="Low fees"
          img={ImageFour}
          alt="lowfees"
          text="Cheper than your usual payment provider"
        />
      </div>
    </div>
  </section>
);
