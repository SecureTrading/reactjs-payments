import React, { Component } from "react"
import Layout from "../components/layout/layout"
import SecureTrading from "../stjs/st"
import Helmet from "react-helmet/es/Helmet"
class IndexPage extends Component {
  componentDidMount() {
    const int = setInterval(() => {
      if (SecureTrading && document.readyState === "complete") {
        this.loadST()
        clearInterval(int)
      }
    }, 2000)
  }

  loadST() {
    this.config = {
      "analytics": true,
      "animatedCard": true,
      "deferInit": false,
      "fieldsToSubmit": ["pan", "expirydate", "securitycode"],
      "buttonId": "merchant-submit-button",
      "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbTAzMTAuYXV0b2FwaSIsImlhdCI6MTU3ODY1NDU3Mi4wNTIxODg5LCJwYXlsb2FkIjp7ImJhc2VhbW91bnQiOiIxMDAwIiwiYWNjb3VudHR5cGVkZXNjcmlwdGlvbiI6IkVDT00iLCJjdXJyZW5jeWlzbzNhIjoiR0JQIiwic2l0ZXJlZmVyZW5jZSI6InRlc3RfamFtZXMzODY0MSIsImxvY2FsZSI6ImVuX0dCIn19.TH5XyEe3nLmZ6J2HYm02TjBTQejfXMVA0CyXQ4SpaWw",
      "styles": {
        "defaultStyles": {
          "background-color-input": "AliceBlue",
        },
        "cardNumber": {
          "font-size-input": "1.5rem",
          "line-height-input": "1.6rem",
        },
        "expirationDate": {
          "font-size-input": "1.5rem",
          "line-height-input": "1.6rem",
        },
        "securityCode": {
          "font-size-input": "1.5rem",
          "line-height-input": "1.6rem",
        },
        "notificationFrame": {
          "color-error": "#FFF333",
        },
        "controlFrame": {
          "color-error": "#3358FF",
        },
      },
      "submitOnSuccess": false,
      "submitCallback": "",
      "translations": {
        "An error occurred": "Wystąpił błąd",
      },
      "components": {},
      "applePay": {
        "buttonStyle": "white-outline",
        "buttonText": "donate",
        "merchantId": "merchant.net.securetrading.test",
        "paymentRequest": {
          "countryCode": "US",
          "currencyCode": "USD",
          "merchantCapabilities": ["supports3DS", "supportsCredit", "supportsDebit"],
          "supportedNetworks": [],
          "total": {
            "label": "Secure Trading Merchant",
            "amount": "10.00",
          },
        },
        "placement": "st-apple-pay",
      },
      "visaCheckout": {
        "buttonSettings": {
          "size": "154",
          "color": "neutral",
        },
        "livestatus": 0,
        "merchantId": "SDUT1MEXJO10RARJF2S521ImTyKfn3_JmxePdXcydQIUb4kx4",
        "paymentRequest": {
          "subtotal": "20.00",
        },
        "placement": "st-visa-checkout",
        "settings": {
          "displayName": "My Test Site",
        },
      },
    };
    this.property = SecureTrading({...this.config});
    (() =>  {
      var parsedUrl = new URL(window.location.href);
      this.config.jwt = parsedUrl.searchParams.get('jwt') || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhbTAzMTAuYXV0b2FwaSIsImlhdCI6MTU3NjI0MDkwMy44NDgxOTIyLCJwYXlsb2FkIjp7Im1haW5hbW91bnQiOiIxMC4wMCIsImFjY291bnR0eXBlZGVzY3JpcHRpb24iOiJFQ09NIiwiY3VycmVuY3lpc28zYSI6IkdCUCIsInNpdGVyZWZlcmVuY2UiOiJ0ZXN0X2phbWVzMzg2NDEiLCJsb2NhbGUiOiJlbl9HQiJ9fQ.dZf3tVclkUTXMR1uXo39jUIXHyjApGXYlAJ-5ujen00';

      this.property.submitCallback = function someFancyfunction(data) {
        var stringified = JSON.stringify(data);
        var testVariable = 'This is what we have got after submit' + stringified;
      };
      this.property.Components(this.config.components);
      this.property.ApplePay(this.config.applePay);
      this.property.VisaCheckout(this.config.visaCheckout);
    })()
  }
  render() {
    return(
      <Layout>
        <Helmet>
          {/*<script src={withPrefix('/static/stumd.js')} type="text/javascript" defer />*/}
        </Helmet>
        <form id="st-form" className="example-form" autoComplete="off" noValidate>
          <h1 className="example-form__title">
            Secure Trading<span>AMOUNT: <strong>10.00 GBP</strong></span>
          </h1>
          <div className="example-form__section example-form__section--horizontal">
            <div className="example-form__group">
              <label htmlFor="example-form-name" className="example-form__label">AMOUNT</label>
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
              <label htmlFor="example-form-name" className="example-form__label">NAME</label>
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
              <label htmlFor="example-form-email" className="example-form__label">E-MAIL</label>
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
              <label htmlFor="example-form-phone" className="example-form__label">PHONE</label>
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

          <div className="example-form__spacer"></div>

          <div className="example-form__section">
            <div id="st-notification-frame" className="example-form__group"></div>
            <div id="st-card-number" className="example-form__group"></div>
            <div id="st-expiration-date" className="example-form__group"></div>
            <div id="st-security-code" className="example-form__group"></div>
            <div className="example-form__spacer"></div>
          </div>

          <div className="example-form__section">
            <div className="example-form__group example-form__group--submit">
              <button type="submit" className="example-form__button" id="merchant-submit-button">Zapłać</button>
            </div>
          </div>

          <div className="example-form__section">
            <div id="st-control-frame" className="example-form__group"></div>
            <div id="st-visa-checkout" className="example-form__group"></div>
            <div id="st-apple-pay" className="example-form__group"></div>
          </div>
          <div id="st-card"></div>
        </form>
      </Layout>
    )
  }
}

export default IndexPage
