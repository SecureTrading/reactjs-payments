import React, { Component } from "react"
import { FooterStyled } from "./footer.styled"

export class Footer extends Component {
  render(){
    return(
      <FooterStyled>
        Copyright &copy; SecureTrading 2020
      </FooterStyled>
    )
  }
}
