import React from 'react';
import { Link } from 'gatsby';
import { NavigationLinkStyles, NavigationStyled } from './navigation.styled';

export const Navigation = () => (
  <NavigationStyled>
    <ul>
      <Link to="/" style={NavigationLinkStyles}>
        Home
      </Link>
      <Link to="/payment-details/payment-details" style={NavigationLinkStyles}>
        Payment Details
      </Link>
      <Link to="/personal-data/personal-data" style={NavigationLinkStyles}>
        Personal Data
      </Link>
      <Link to="/contact-data/contact-data" style={NavigationLinkStyles}>
        Contact Data
      </Link>
      <Link to="/st-payment/st-payment" style={NavigationLinkStyles}>
        Payment
      </Link>
    </ul>
  </NavigationStyled>
);
