import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import config from '../utils/config';
import HomeHero from '../components/HomeHero';
import SectionFees from '../components/SectionFees';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title={config.siteName}
          description={config.description}
          url={`${config.siteUrl}`}
          image={config.image}
        />
        <HomeHero />
        <SectionFees />
      </Layout>
    );
  }
}
