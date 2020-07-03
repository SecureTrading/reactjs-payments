import React, { Component } from 'react';
import Layout from '../components/layout/layout';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <header className="st-header">
          <figure className="st-header__logo">
            <img src="./images/st.png" alt="Secure Trading logo" title="Secure Trading" role="img" />
          </figure>
          <h1 className="st-header__title">Example Form</h1>
          Welcome to our form
        </header>
      </Layout>
    );
  }
}

export default IndexPage;
