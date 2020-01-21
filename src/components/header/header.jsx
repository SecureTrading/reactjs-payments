import { Link } from "gatsby"
import React from "react"
import { HeaderStyled } from "./header.styled"
import Image from "../image/image"
import { LinkStyled } from "../link/link.styled"
import PropTypes from "prop-types"

export const Header = () => (
  <HeaderStyled>
    <LinkStyled>
      <Link to="/"><Image/></Link>
    </LinkStyled>
    <ul>
      <LinkStyled><Link to="/">ReactJS Secure Trading</Link></LinkStyled>
      <LinkStyled><Link to="/animated-card">ReactJS STJS Animated Card</Link></LinkStyled>
    </ul>
  </HeaderStyled>
)

Header.propTypes = { siteTitle: PropTypes.string, }
Header.defaultProps = { siteTitle: ``, }
