import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { HeaderStyled } from './header.styled';

export const Header = () => (
  <HeaderStyled>
    <ul>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        Home
      </Link>
      <Link to="/payment-details" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        Payment Details
      </Link>
      <Link to="/personal-data" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        Personal Data
      </Link>
      <Link to="/contact-data" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        Contact Data
      </Link>
      <Link to="/st-payment" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        Payment
      </Link>
    </ul>
  </HeaderStyled>
);

Header.propTypes = { siteTitle: PropTypes.string };
Header.defaultProps = { siteTitle: `` };
