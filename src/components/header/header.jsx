import { Link } from "gatsby"
import React from "react"
import { HeaderStyled } from "./header.styled"
import Image from "../image/image"
import { headerDefaultProps, headerPropTypes } from "./header.prop"
import { LinkStyled } from "../link/link.styled"

export const Header = ({ siteTitle }) => (
  <HeaderStyled>
    <LinkStyled>
      <Link to="/" style={{ textDecoration: `none`,}}><Image/>{siteTitle}</Link>
    </LinkStyled>
    <ul>
      <LinkStyled><Link to="/">ReactJS Secure Trading</Link></LinkStyled>
      <LinkStyled><Link to="/animated-card">ReactJS STJS Animated Card</Link></LinkStyled>
    </ul>
  </HeaderStyled>
)

Header.propTypes = { ...headerPropTypes }
Header.defaultProps = { headerDefaultProps }
