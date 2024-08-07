import logo from "../../../assets/images/logo.svg"
import { RegularText } from "../../../styled/Headings"
import { FooterContainer, FooterLink } from "./FooterStyled"

export default function Footer() {
  return (
    <FooterContainer>
      <img src={logo} width="100px" height="50px" />
      <FooterLink href="">
        <RegularText fw="400">Community rules</RegularText>
      </FooterLink>
      <FooterLink href="">
        <RegularText fw="400">About us</RegularText>
      </FooterLink>
      <FooterLink href="">
        <RegularText fw="400">To the rights holders </RegularText>
      </FooterLink>
      <FooterLink href="">
        <RegularText fw="400">Privacy policy</RegularText>
      </FooterLink>
    </FooterContainer>
  )
}
