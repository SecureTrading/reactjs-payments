import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { HeaderStyled } from './header.styled';

export const Header = () => (
  <HeaderStyled>
    <ul>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        ReactJS Secure Trading
      </Link>
      <Link to="/test-page-one" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        ReactJS Secure Trading
      </Link>
      <Link to="/test-page-two" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        ReactJS Secure Trading
      </Link>
      <Link to="/test-page-three" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        ReactJS Secure Trading
      </Link>
      <Link to="/animated-card" style={{ color: '#fff', textDecoration: 'none', padding: '1rem 2rem' }}>
        ReactJS STJS Animated Card
      </Link>
    </ul>
  </HeaderStyled>
);

Header.propTypes = { siteTitle: PropTypes.string };
Header.defaultProps = { siteTitle: `` };
