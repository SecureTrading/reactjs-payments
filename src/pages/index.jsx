import React, { Component } from 'react';
import Layout from '../components/layout/layout';
import './../example.css';
import { Link } from 'gatsby';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <header className="st-header">
          <figure className="st-header__logo">
            <img src="./images/st.png" alt="Secure Trading logo" title="Secure Trading" role="img" />
          </figure>
          <h1 className="st-header__title">Example Form</h1>
        </header>
        <p>This is an example form simulating SPA; please click link below</p>
        <div
          className="st-navigation"
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '20px 0'
          }}
        >
          <Link
            to="/payment-details"
            style={{
              textDecoration: 'none',
              padding: '1rem 2rem',
              backgroundColor: '#e61c5b',
              borderRadius: '11px',
              color: '#fff'
            }}
          >
            Start Calculation
          </Link>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
