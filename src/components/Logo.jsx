import { NavLink } from "react-router-dom"
import logo from "./../assets/images/logo.svg"
import styled from "styled-components"
import { string } from "prop-types"

const LogoImg = styled.img`
  height: ${(props) => props.height}px;

  @media (max-width: 1000px) {
    height: ${(props) => props.height * 0.8}px;
  }
`

export default function Logo({ height }) {
  return (
    <NavLink to="/">
      <LogoImg src={logo} height={height} />
    </NavLink>
  )
}

Logo.propTypes = {
  height: string,
}
