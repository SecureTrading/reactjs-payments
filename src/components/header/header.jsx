import { Link } from "gatsby"
import React from "react"
import { HeaderStyled } from "./header.styled"
import { LinkStyled } from "../link/link.styled"
import PropTypes from "prop-types"
import { GatsbyLinkStyle } from "../link/link.styled"

export const Header = () => (
  <HeaderStyled>
    <h2>Secure Trading</h2>
    <ul>
      <LinkStyled><Link to="/" style={GatsbyLinkStyle}>STJS Library</Link></LinkStyled>
      <LinkStyled><Link to="/animated-card" style={GatsbyLinkStyle}>STJS Animated Card</Link></LinkStyled>
    </ul>
  </HeaderStyled>
)

Header.propTypes = { siteTitle: PropTypes.string, }
Header.defaultProps = { siteTitle: ``, }
