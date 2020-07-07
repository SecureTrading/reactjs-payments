import React from 'react';
import Layout from '../../components/layout/layout';
import { Link } from 'gatsby';
import { Heading } from '../../components/heading/heading';
import PersonalData from '../personal-data/personal-data';

const PaymentDetails = () => {
  return (
    <Layout>
      <Heading title={'Step 2: Payment Details'} />
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
          to="/personal-data/personal-data"
          style={{
            textDecoration: 'none',
            padding: '1rem 2rem',
            backgroundColor: '#e61c5b',
            borderRadius: '11px',
            color: '#fff'
          }}
        >
          Step 3: <strong>Personal Data</strong>
        </Link>
      </div>
    </Layout>
  );
};
export default PaymentDetails;
