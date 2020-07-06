import React, { Component } from 'react';
import '../../style.css';
import { Footer } from '../footer/footer';
import { LayoutStyled } from './layout.styled';
import { Header } from '../header/header';

class Layout extends Component {
  render() {
    return (
      <LayoutStyled>
        <Header siteTitle="SecureTrading" />
        <main style={{ minHeight: '47rem' }}>
          <form role="form" name="st-form" id="st-form" className="st-form" autoComplete="off" noValidate>
            <div id="st-popup" className="st-popup" />
            <div id="st-notification-frame" className="st-form__group" />
            {this.props.children}
          </form>
        </main>
        <Footer />
      </LayoutStyled>
    );
  }
}

export default Layout;
