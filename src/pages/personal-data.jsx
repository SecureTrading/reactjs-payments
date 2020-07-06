import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';

class PersonalData extends Component {
  render() {
    return (
      <Layout>
        <fieldset className="st-form__fieldset">
          <legend>Personal data:</legend>
          <div className="st-form__section st-form__section--horizontal">
            <div className="st-form__field">
              <label htmlFor="st-form-title" className="st-form__label">
                title:
              </label>
              <select id="st-form-title" className="st-form__input" placeholder="Title" autoComplete="title">
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
          </div>
          <div className="st-form__section st-form__section--horizontal">
            <div className="st-form__field">
              <label htmlFor="st-form-first-name" className="st-form__label">
                first name:{' '}
              </label>
              <input
                type="text"
                name="myBillFirstName"
                id="st-form-first-name"
                className="st-form__input"
                placeholder="John"
                data-st-name="billingfirstname"
                autoComplete="given-name"
              />
            </div>

            <div className="st-form__field">
              <label htmlFor="st-form-last-name" className="st-form__label">
                last name:{' '}
              </label>
              <input
                type="text"
                name="myBillLastName"
                id="st-form-last-name"
                className="st-form__input"
                placeholder="Doe"
                data-st-name="billinglastname"
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className="st-form__section st-form__section--horizontal">
            <div className="st-form__field">
              <label htmlFor="st-form-title" className="st-form__label">
                date of birth:
              </label>
              <input
                type="date"
                name="myBillDateOfBirth"
                id="st-form-date-of-birth"
                className="st-form__input"
                placeholder="myBillDateOfBirth"
                data-st-name="billingdateofbirth"
                autoComplete="date"
              />
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
            to="/contact-data"
            style={{
              textDecoration: 'none',
              padding: '1rem 2rem',
              backgroundColor: '#e61c5b',
              borderRadius: '11px',
              color: '#fff'
            }}
          >
            Step 3: <strong>Contact Data</strong>
          </Link>
        </div>
      </Layout>
    );
  }
}

export default PersonalData;
