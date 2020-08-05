import React from 'react';
import { Link } from 'gatsby';
import { NavigationLinkStyles, NavigationStyled } from './navigation.styled';

export const Navigation = () => (
  <NavigationStyled>
    <ul className="navigation">
      <Link to="/" style={NavigationLinkStyles} id={'home'}>
        Home
      </Link>
      <Link to="/payment-details" style={NavigationLinkStyles} id={'payment-details'}>
        Payment Details
      </Link>
      <Link to="/personal-data" style={NavigationLinkStyles} id={'personal-data'}>
        Personal Data
      </Link>
      <Link to="/contact-data" style={NavigationLinkStyles} id={'contact-data'}>
        Contact Data
      </Link>
      <Link to="/" style={NavigationLinkStyles} id={'payment'}>
        Payment
      </Link>
    </ul>
  </NavigationStyled>
);
