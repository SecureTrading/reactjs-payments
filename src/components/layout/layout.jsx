import React, { Component } from "react"
import "../../style.css"
import PropTypes from "prop-types"
import { Footer } from "../footer/footer"
import { LayoutStyled } from "./layout.styled"
import Helmet from "react-helmet/es/Helmet"
import SecureTrading from "./../../../src/stjs/st"
import { Header } from "../header/header"
import "./../../../src/stjs/st.css"

class Layout extends Component {
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
    this.property = SecureTrading({
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
      }
    );
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
    return (
      <LayoutStyled>
        <Header siteTitle="SecureTrading"/>
        <Helmet>
          {/*<script src={withPrefix('/static/stumd.js')} type="text/javascript" defer />*/}
        </Helmet>
        <main style={{ minHeight: "47rem" }}>
          <div>{this.props.children}</div>
        </main>
        <Footer/>
      </LayoutStyled>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
