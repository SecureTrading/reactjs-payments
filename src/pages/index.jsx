import React, { Component } from "react"
import Layout from "../components/layout/layout"
import SecureTrading from "./../../static/st"
import Helmet from "react-helmet/es/Helmet"
import { libraryExampleConfig }  from '../../static/libraryExampleConfig';

class IndexPage extends Component {
  componentDidMount() {
    this.config = libraryExampleConfig
    console.error(this.config)
    this.loadST()
  }

  loadST() {
    (() => {
      var parsedUrl = new URL(window.location.href)
      console.error(parsedUrl)
      console.error(this.config.jwt);
      this.config.jwt = parsedUrl.searchParams.get("jwt") || this.config.jwt
      console.error(this.config.jwt);

      this.instance = SecureTrading({ ...this.config });
      this.instance.submitCallback = function someFancyfunction(data) {
        var stringified = JSON.stringify(data)
        var testVariable = "This is what we have got after submit" + stringified
      }
      this.instance.Components(this.config.components)
      this.instance.ApplePay(this.config.applePay)
      this.instance.VisaCheckout(this.config.visaCheckout)
    })()
  }

  render() {
    return (
      <Layout>
        <Helmet>
          {/*<script src={withPrefix('/static/stumd.js')} type="text/javascript" defer />*/}
        </Helmet>
        <form id="st-form" className="example-form" autoComplete="off" noValidate>
          <h1 className="example-form__title">
            <img style={{maxWidth: '200px'}} src="./st.png" /><span>AMOUNT: <strong>10.00 GBP</strong></span>
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
          <div id="st-animated-card"></div>
        </form>
      </Layout>
    )
  }
}

export default IndexPage
