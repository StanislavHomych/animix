import styled from 'styled-components';
import { theme } from '../../../styled/theme';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  background-color: ${({ isScrolled }) =>
    isScrolled ? 'rgba(255, 255, 255, 0.028)' : 'transparent'};
  backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};
  z-index: 1000000;
`;

export const HeaderInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  font-family: "Montserrat", sans-serif;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const SearchBar = styled.input`
  background: ${(props) => props.theme.blured};
  border: 2px solid ${(props) => props.theme.greySecondary};
  border-radius: 20px;
  color: #fff;
  font-size: 1em;
  font-weight: 400;
  padding: 3px 10px;
  text-align: center;
  outline: none;
`;

export const UserAvatar = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 30px;
  cursor: pointer;
`;

export const SearchBarContainer = styled.div`
  position: relative;
`;

export const UserAvatarImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 30px;
`;

export const SearchBarResults = styled.ul`
  position: absolute;
  left: 0px;
  background-color: ${theme.bluredDark};
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  max-width: 250px;
  padding: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 800px) {
    background-color: transparent;
    border-radius: 0;
  }
`;

export const SearchResultItem = styled.li`
  box-sizing: border-box;
  height: 40px;
  font-size: 0.7em;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-weight: 600;
  text-overflow: ellipsis;
  transition: all 0.3s;
  padding: 10px 20px;
  width: 100%;
  min-width: 250px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.greyPrimary};
    color: #fff;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.4),
      0 0 15px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 800px) {
    border-radius: 10px;
  }
`;

export const SearchResultImg = styled.img`
  border-radius: 30px;
  height: 30px;
  width: 30px;
  align-self: center;
`;

// Header styled for tabs
export const Sidebar = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;

export const SidebarContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  height: 100vh;
  background-color: ${theme.bluredDarkest};
  color: white;
  transition: top 0.3s ease;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 11vh 0px 0px 0px;
  align-items: center;
  gap: 20px;
  z-index: -1;
`;

export const ToggleButton = styled.div`
  right: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 1.6em;
  padding: 0;
  transition: top 0.3s ease;
`;

export const SideBarInnerContainer = styled.div`
  position: relative;
  display: flex;
  gap: 15px;
  margin-right: 20px;
`;

// Hidden menu styled
export const LinkSettings = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

export const HiddenMenuContainer = styled.div`
  position: absolute;
  height: 50px;
  width: 100px;
  right: 10px;
  top: 60px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background-color: ${theme.grayDark};
  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;
`;
