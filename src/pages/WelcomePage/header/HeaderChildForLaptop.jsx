import { useState, useEffect } from "react"
import { HeaderInnerContainer, UserAvatar, UserAvatarImg } from "./HeaderStyled"
import { StyledNavLink } from "../../../styled/Links"
import Search from "./Search"
import { theme } from "../../../styled/theme"
import { ButtonMain } from "../../../styled/Buttons"
import HiddenMenu from "./HiddenMenu"
import { bool, func } from "prop-types"

const defaultAvatar =
  "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/defaultavatar.jpg"

export default function HeaderChildForLaptop({
  setVisibility,
  setIsShown,
  isShown,
}) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user")
    return storedUser ? JSON.parse(storedUser) : null
  })

  // A function to update a user from local storage
  const updateUser = () => {
    const storedUser = localStorage.getItem("user")
    setUser(storedUser ? JSON.parse(storedUser) : null)
  }

  // Set interval to check for changes every 1 second - needs rework
  useEffect(() => {
    const intervalId = setInterval(updateUser, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <HeaderInnerContainer>
      <StyledNavLink to="/leaderboard">Leaderboard</StyledNavLink>
      <StyledNavLink to="/mycollection">My collection</StyledNavLink>
      <Search />
      {user ? (
        <>
          <UserAvatar onClick={() => setIsShown(!isShown)}>
            <UserAvatarImg
              src={user.avatar || defaultAvatar}
              alt="User Avatar"
            />
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
    </HeaderInnerContainer>
  )
}

HeaderChildForLaptop.propTypes = {
  setVisibility: func.isRequired,
  setIsShown: func.isRequired,
  isShown: bool.isRequired,
}
