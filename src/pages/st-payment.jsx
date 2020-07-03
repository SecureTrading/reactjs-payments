import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import environment from '../environment/environment';
import '../../static/libraries/st.css';

class StPayment extends Component {
  componentDidMount() {
    var self = this;

    self.loadConfig().then(function(config) {
      self.loadST(config);
    });
  }

  loadST(config) {
    var instance = SecureTrading(config);

    instance.submitCallback = function someFancyfunction(data) {
      var stringified = JSON.stringify(data);
      var testVariable = 'This is what we have got after submit' + stringified;
      console.error(testVariable);
    };
    instance.successCallback = function() {
      alert('Success alert');
    };
    instance.errorCallback = function() {
      alert('This is error message');
    };
    instance.Components(config.components);
    instance.ApplePay(config.applePay);
    instance.VisaCheckout(config.visaCheckout);

    document.getElementById('example-form-amount').addEventListener('input', function() {
      instance.updateJWT(
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbTAzMTAuYXV0b2FwaSIsImlhdCI6MTU5MDE1NDgwNy4wNzQ5ODg2LCJwYXlsb2FkIjp7Im1haW5hbW91bnQiOiIyMC4wMCIsImFjY291bnR0eXBlZGVzY3JpcHRpb24iOiJFQ09NIiwiY3VycmVuY3lpc28zYSI6IkdCUCIsInNpdGVyZWZlcmVuY2UiOiJ0ZXN0X2phbWVzMzg2NDEiLCJsb2NhbGUiOiJlbl9HQiJ9fQ.eXAxDB5yOaM-63k6tf0634ojvQo7zDuuXeAKmP3DtGw'
      );
    });
  }

  loadConfig() {
    return window
      .fetch(environment.config_url)
      .then(function(response) {
        return response.json();
      })
      .catch(function(error) {
        console.error('Failed to load config: ' + error + '. Falling back to defaults.');

        return require('../../static/config.json');
      });
  }
  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

export default StPayment;
