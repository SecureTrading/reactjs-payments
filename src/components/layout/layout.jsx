import React  from "react"
import "../../style.css"
import PropTypes from "prop-types"
import { Footer } from "../footer/footer"
import { LayoutStyled } from "./layout.styled"
import { Header } from "../header/header"
import "../../../static/libraries/st.css"

export const Layout = (props) =>  {
    return (
      <LayoutStyled>
        <Header siteTitle="SecureTrading"/>
        <main style={{ minHeight: "47rem" }}>
          <div>{props.children}</div>
        </main>
        <Footer/>
      </LayoutStyled>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
