import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';

class ContactData extends Component {
  render() {
    return (
      <Layout>
        <h1>Step 3: Contact Data</h1>
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
          <legend>Contact data:</legend>
          <div className="st-form__section st-form__section--horizontal">
            <div className="st-form__field">
              <label htmlFor="st-form-email" className="st-form__label">
                e-mail:{' '}
              </label>
              <input
                type="email"
                name="myBillEmail"
                id="st-form-email"
                className="st-form__input"
                placeholder="test@mail.com"
                data-st-name="billingemail"
                autoComplete="email"
              />
            </div>

            <div className="st-form__field">
              <label htmlFor="st-form-phone" className="st-form__label">
                phone:{' '}
              </label>
              <input
                type="tel"
                name="myBillTel"
                id="st-form-phone"
                className="st-form__input"
                placeholder="+00 000 000 000"
                autoComplete="tel"
              />
            </div>
          </div>
          <div className="st-form__section st-form__section--horizontal">
            <div className="st-form__field">
              <label htmlFor="st-form-address1" className="st-form__label">
                street:{' '}
              </label>
              <input type="text" id="st-form-address1" className="st-form__input" placeholder="Park Str." />
            </div>

            <div className="st-form__field">
              <label htmlFor="st-form-address2" className="st-form__label">
                city:{' '}
              </label>
              <input type="tel" id="st-form-address2" className="st-form__input" placeholder="Richmond" />
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
            to="/st-payment"
            style={{
              textDecoration: 'none',
              padding: '1rem 2rem',
              backgroundColor: '#e61c5b',
              borderRadius: '11px',
              color: '#fff'
            }}
          >
            Step 4: <strong>Payment</strong>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default ContactData;
