import React, { Component } from "react"
import Card from "@securetrading/js-payments-card/dist/stcard"
import "@securetrading/js-payments-card/dist/stcardstyle.css"
import Layout from "../components/layout/layout"

class AnimatedCard extends Component {
  componentDidMount() {
    let card;
    const int = setInterval(() => {
      if (Card && document.readyState === "complete") {
        card = new Card({
          locale: "en_GB",
          fields: {
            inputs: {
              cardNumber: "st-card-number-input",
              expirationDate: "st-expiration-date-input",
              securityCode: "st-security-code-input",
            },
            errors: {
              cardNumber: "st-card-number-message",
              expirationDate: "st-expiration-date-message",
              securityCode: "st-security-code-message",
            },
          },
          animatedCardContainer: "st-animated-card",
        })
        card.onCardNumberInput('st-card-number-input', function(event) {});
        card.onExpirationDateInput('st-expiration-date-input', function(event) {});
        card.onSecurityCodeInput('st-security-code-input', function(event) {});
        clearInterval(int)
      }
    }, 2000)
  }

  render() {
    return (
      <Layout>
        <div className="merchants-form__fields">
          <div className="merchants-form__field">
            <label htmlFor="st-card-number-input">Card number: </label>
            <input type="text" className="merchants-form__input" id="st-card-number-input"
                   name="st-card-number-input"/>
            <div className="merchants-form__error" id="st-card-number-message"/>
          </div>

          <div className="merchants-form__field">
            <label htmlFor="st-expiration-date-input">Expiration date: </label>
            <input
              type="text"
              className="merchants-form__input"
              id="st-expiration-date-input"
              name="st-expiration-date-input"
            />
            <div className="merchants-form__error" id="st-expiration-date-message"/>
          </div>

          <div className="merchants-form__field">
            <label htmlFor="st-security-code-input">Security code: </label>
            <input type="text" className="merchants-form__input" id="st-security-code-input"
                   name="st-security-code-input"/>
            <div className="merchants-form__error" id="st-security-code-message"/>
          </div>
        </div>

        <div id="st-animated-card" className="st-animated-card-wrapper"/>
      </Layout>
    )
  }
}

export default AnimatedCard

