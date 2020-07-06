import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';

class PaymentDetails extends Component {
  render() {
    return (
      <Layout>
        <h1>Step 2: Payment Details</h1>
        <h4>This is an example form simulating SPA; please click link below</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <fieldset className="st-form__fieldset">
          <legend>Payment details:</legend>
          <div className="st-form__section st-form__section--horizontal">
            <div className="st-form__field">
              <label htmlFor="st-form-price" className="st-form__label">
                price:
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>

              <input
                type="text"
                name="myBillPrice"
                value="10"
                id="st-form-price"
                className="st-form__input"
                placeholder="myBillPrice"
                data-st-name="billingprice"
                disabled
              />
            </div>
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
          </div>
          <div className="st-form__section st-form__section--horizontal">
            <div className="st-form__field">
              <label htmlFor="st-form-subscribe" className="st-form__label">
                type of payment:
                <abbr title="required" aria-label="required">
                  *
                </abbr>
              </label>
              <select
                name="myBillSubscribe"
                id="st-form-subscribe"
                className="st-form__input"
                placeholder="myBillSubscribe"
                autoComplete="subscribe"
              >
                <option value="one-off payment">one-off payment</option>
                <option value="monthly payment">monthly payment</option>
              </select>
            </div>
          </div>
        </fieldset>
        <div
          className="st-navigation"
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0'
          }}
        >
          <Link
            to="/personal-data"
            style={{
              textDecoration: 'none',
              padding: '1rem 2rem',
              backgroundColor: '#e61c5b',
              borderRadius: '11px',
              color: '#fff'
            }}
          >
            Step 2: <strong>Personal Data</strong>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default PaymentDetails;
