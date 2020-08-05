import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import environment from '../environment/environment';
import '../../static/libraries/st.css';
import { Heading } from '../components/heading/heading';

const newJwt =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbTAzMTAuYXV0b2FwaSIsImlhdCI6MTU5MDE1NDgwNy4wNzQ5ODg2LCJwYXlsb2FkIjp7Im1haW5hbW91bnQiOiIyMC4wMCIsImFjY291bnR0eXBlZGVzY3JpcHRpb24iOiJFQ09NIiwiY3VycmVuY3lpc28zYSI6IkdCUCIsInNpdGVyZWZlcmVuY2UiOiJ0ZXN0X2phbWVzMzg2NDEiLCJsb2NhbGUiOiJlbl9HQiJ9fQ.eXAxDB5yOaM-63k6tf0634ojvQo7zDuuXeAKmP3DtGw';

class Index extends Component {
  componentDidMount() {
    const self = this;

    self.loadConfig().then(function(config) {
      self.loadST(config);
    });
  }

  initUpdateJwtListener() {
    document.getElementById('example-form-amount').addEventListener('input', () => this.instance.updateJWT(newJwt));
  }

  displayPopup(id, text, tp) {
    if (!document.getElementById(id)) {
      var div = document.createElement('div');
      div.innerText = text;
      div.setAttribute('id', id);
      div.setAttribute(
        'style',
        'display: flex; justify-content: center; position: fixed; height: 70px;right:0;color: white;padding: 0 50px;align-items: center;border-radius: 10px;font-family: Verdana;font-size: 20px;z-index:2'
      );
      div.style.backgroundColor = tp;
      switch (tp) {
        case 'green':
          div.style.top = 0;
          break;
        case 'blue':
          div.style.top = '100px';
          break;
        default:
          div.style.bottom = 0;
      }
      var popup = document.getElementById('st-popup');
      popup.appendChild(div);
      setTimeout(function() {
        popup.removeChild(div);
      }, 3000);
    }
  }

  loadST(config) {
    const { components, applePay, visaCheckout } = config;
    this.instance = SecureTrading(config);

    this.instance.submitCallback = data => {
      console.error(`This is what we have got after submit ${JSON.stringify(data)}`);
    };

    this.instance.successCallback = () => this.displayPopup('success-popup', 'This is success message', 'green');
    this.instance.errorCallback = () => this.displayPopup('error-popup', 'This is error message', 'red');
    this.instance.cancelCallback = () => this.displayPopup('cancel-popup', 'This is cancel message', '#ffc23a');
    this.instance.Components(components);
    this.instance.ApplePay(applePay);
    this.instance.VisaCheckout(visaCheckout);
    this.initUpdateJwtListener();
  }

  loadConfig() {
    return window
      .fetch(environment.config_url)
      .then(response => response.json())
      .catch(error => {
        console.error(`Failed to load config: ${error}. Falling back to defaults.`);
      });
  }

  render() {
    return (
      <Layout>
        <Heading title={'Payment'} />
        <div className="st-form__field">
          <label htmlFor="example-form-amount" className="st-form__label">
            amount:
            <abbr title="required" aria-label="required">
              *
            </abbr>
          </label>
          <input
            type="number"
            name="myBillAmount"
            id="example-form-amount"
            className="st-form__input"
            placeholder="myBillAmount"
            data-st-name="billingamount"
            autoComplete="amount"
          />
        </div>
        <fieldset className="st-form__fieldset">
          <legend>APM's:</legend>
          <div id="st-visa-checkout" className="st-form__group" />
          <div id="st-apple-pay" className="st-form__group" />
        </fieldset>

        <fieldset className="st-form__fieldset">
          <legend>Credit card details:</legend>
          <div id="st-card-number" className="st-form__group" />
          <div id="st-expiration-date" className="st-form__group" />
          <div id="st-security-code" className="st-form__group" />
        </fieldset>

        <div id="st-animated-card" className="st-form__st-animated-card" />

        <div id="st-control-frame" className="st-form__group" />

        <div className="st-form__group st-form__group--submit">
          <button type="submit" className="st-form__button" id="merchant-submit-button">
            Zapłać
          </button>
        </div>
        <div id="st-popup" />
      </Layout>
    );
  }
}

export default Index;
