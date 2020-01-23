import React, { Component } from "react"
import "../../style.css"
import PropTypes from "prop-types"
import { Footer } from "../footer/footer"
import { LayoutStyled } from "./layout.styled"
import { Header } from "../header/header"
import "./../../../src/stjs/st.css"

class Layout extends Component {
  render() {
    return (
      <LayoutStyled>
        <Header siteTitle="SecureTrading"/>
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
