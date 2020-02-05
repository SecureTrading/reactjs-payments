import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import SecureTrading from '../../static/libraries/st';
import { config } from '../config';

class IndexPage extends Component {
  componentDidMount() {
    this.config = config;
    this.loadST();
  }

  loadST() {
    (() => {
      var parsedUrl = new URL(window.location.href);
      this.config.jwt = parsedUrl.searchParams.get('jwt') || this.config.jwt;
      const instance = SecureTrading({ ...this.config });
      instance.submitCallback = function someFancyfunction(data) {
        var stringified = JSON.stringify(data);
        var testVariable = 'This is what we have got after submit' + stringified;
      };
      instance.Components(this.config.components);
      instance.ApplePay(this.config.applePay);
      instance.VisaCheckout(this.config.visaCheckout);
      document.getElementById('example-form-amount').addEventListener('input', function() {
        instance.updateJWT(
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbTAzMTAuYXV0b2FwaSIsImlhdCI6MTU4MDg5OTE1OC45OTE5OTQ5LCJwYXlsb2FkIjp7ImJhc2VhbW91bnQiOiIxMDAwIiwiYWNjb3VudHR5cGVkZXNjcmlwdGlvbiI6IkVDT00iLCJjdXJyZW5jeWlzbzNhIjoiR0JQIiwic2l0ZXJlZmVyZW5jZSI6InRlc3RfamFtZXMzODY0MSIsImxvY2FsZSI6ImVuX0dCIn19.Z5xQ4m8p7985RdlcDKAfIY-a0D8R7r7b8HxV55J2f-4'
        );
      });
    })();
  }

  render() {
    return (
      <Layout>
        <form id="st-form" className="example-form" autoComplete="off" noValidate>
          <h1 className="example-form__title">
            <img style={{ maxWidth: '200px' }} src="./images/st.png" />
            <span>
              AMOUNT: <strong>10.00 GBP</strong>
            </span>
          </h1>
          <div className="example-form__section example-form__section--horizontal">
            <div className="example-form__group">
              <label htmlFor="example-form-name" className="example-form__label">
                AMOUNT
              </label>
              <input
                id="example-form-amount"
                className="example-form__input"
                type="number"
                placeholder=""
                name="myBillAmount"
                data-st-name="billingamount"
              />
            </div>
          </div>

          <div className="example-form__section example-form__section--horizontal">
            <div className="example-form__group">
              <label htmlFor="example-form-name" className="example-form__label">
                NAME
              </label>
              <input
                id="example-form-name"
                className="example-form__input"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
                name="myBillName"
                data-st-name="billingfirstname"
              />
            </div>
            <div className="example-form__group">
              <label htmlFor="example-form-email" className="example-form__label">
                E-MAIL
              </label>
              <input
                id="example-form-email"
                className="example-form__input"
                type="email"
                placeholder="test@mail.com"
                autoComplete="email"
                name="myBillEmail"
                data-st-name="billingemail"
              />
            </div>
            <div className="example-form__group">
              <label htmlFor="example-form-phone" className="example-form__label">
                PHONE
              </label>
              <input
                id="example-form-phone"
                className="example-form__input"
                type="tel"
                placeholder="+00 000 000 000"
                autoComplete="tel"
                name="myBillTel"
              />
            </div>
          </div>

          <div className="example-form__spacer" />

          <div className="example-form__section">
            <div id="st-notification-frame" className="example-form__group" />
            <div id="st-card-number" className="example-form__group" />
            <div id="st-expiration-date" className="example-form__group" />
            <div id="st-security-code" className="example-form__group" />
            <div className="example-form__spacer" />
          </div>

          <div className="example-form__section">
            <div className="example-form__group example-form__group--submit">
              <button type="submit" className="example-form__button" id="merchant-submit-button">
                Zapłać
              </button>
            </div>
          </div>

          <div className="example-form__section">
            <div id="st-control-frame" className="example-form__group" />
            <div id="st-visa-checkout" className="example-form__group" />
            <div id="st-apple-pay" className="example-form__group" />
          </div>
          <div id="st-animated-card" />
        </form>
      </Layout>
    );
  }
}

export default IndexPage;
