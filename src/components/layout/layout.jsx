import React from "react"
import './layout.css';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"
import { Footer } from "../footer/footer"
import { LayoutStyled } from "./layout.styled"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <LayoutStyled>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main style={{minHeight: '47rem'}}>{children}</main>
        <Footer />
    </LayoutStyled>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
