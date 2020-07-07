import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import { Heading } from '../components/heading/heading';
import { LinkStyled, LinkStyles } from '../components/link/link.styled';
import { Header } from '../components/header/header';
import { NavigationStyles } from './index.styled';

const IndexPage = () => {
  return (
    <Layout>
      <Header logo={'./images/st.png'} title={'Example Form'} />
      <Heading title={'Step 1: Home'} />
      <div className="st-navigation" style={NavigationStyles}>
        <LinkStyled>
          <Link to="/payment-details/payment-details" style={LinkStyles}>
            Start Calculation
          </Link>
        </LinkStyled>
      </div>
    </Layout>
  );
};
export default IndexPage;
