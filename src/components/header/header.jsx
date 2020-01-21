import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderStyled } from "./header.styled"
import Image from "../image/image"

const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <Link
      to="/"
      style={{ textDecoration: `none`, color: "#fff" }}
    >
      <Image/>
    </Link>
    <ul>
      <Link to="/" style={{ "color": "#fff", textDecoration: "none", padding: "1rem 2rem" }}>ReactJS Secure
        Trading</Link>
      <Link to="/animated-card" style={{ "color": "#fff", textDecoration: "none", padding: "1rem 2rem" }}>ReactJS STJS
        Animated Card</Link>
    </ul>
  </HeaderStyled>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
