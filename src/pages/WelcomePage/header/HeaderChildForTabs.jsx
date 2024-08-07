import { useState, useEffect } from "react"
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai"
import { theme } from "../../../styled/theme"
import { StyledNavLink } from "../../../styled/Links"
import Search from "./Search"
import { ButtonMain } from "../../../styled/Buttons"
import HiddenMenu from "./HiddenMenu"
import { bool, func, object } from "prop-types"
import { UserAvatar, UserAvatarImg } from "./HeaderStyled"
import {
  Sidebar,
  SidebarContainer,
  ToggleButton,
  SideBarInnerContainer,
} from "./HeaderStyled"

const defaultAvatar =
  "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/defaultavatar.jpg"

const HeaderChildForTabs = ({ user, setVisibility, setIsShown, isShown }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [avatar, setAvatar] = useState(defaultAvatar)

  // Set interval to check for changes every 1 second - needs rework
  useEffect(() => {
    const interval = setInterval(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"))
      if (storedUser && storedUser.avatar) {
        setAvatar(storedUser.avatar)
      } else {
        setAvatar(defaultAvatar)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Sidebar>
      <SideBarInnerContainer>
        <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
          {isOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
        </ToggleButton>
        {user ? (
          <>
            <UserAvatar onClick={() => setIsShown(!isShown)}>
              <UserAvatarImg src={avatar} alt="User Avatar" />
            </UserAvatar>
            <HiddenMenu isShown={isShown} setVisibility={setVisibility} />
          </>
        ) : (
          <StyledNavLink to="/login">
            <ButtonMain
              padding="10px"
              width="100px"
              fSize="0.8em"
              bgColor={theme.blured}
            >
              Log in
            </ButtonMain>
          </StyledNavLink>
        )}
      </SideBarInnerContainer>
      {isOpen && (
        <SidebarContainer isOpen={isOpen}>
          <StyledNavLink
            onClick={toggleSidebar}
            fSize="1.5em"
            to="/leaderboard"
          >
            Leaderboard
          </StyledNavLink>
          <StyledNavLink
            onClick={toggleSidebar}
            fSize="1.5em"
            to="/mycollection"
          >
            My collection
          </StyledNavLink>
          <Search toggleSidebar={toggleSidebar} />
        </SidebarContainer>
      )}
    </Sidebar>
  )
}

export default HeaderChildForTabs

HeaderChildForTabs.propTypes = {
  user: object,
  setVisibility: func,
  setIsShown: func,
  isShown: bool,
}
