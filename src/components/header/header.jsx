import React from "react"
import { HeaderStyled } from "./header.styled"
import PropTypes from "prop-types"

export const Header = () => (
  <HeaderStyled>
    <h2>Secure Trading</h2>
  </HeaderStyled>
)

Header.propTypes = { siteTitle: PropTypes.string, }
Header.defaultProps = { siteTitle: ``, }
