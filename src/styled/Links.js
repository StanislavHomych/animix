import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  color: #fff;
  font-size: ${(props) => props.fSize || '1em'};
`;
