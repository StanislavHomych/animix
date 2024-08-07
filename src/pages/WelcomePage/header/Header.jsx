import Logo from "../../../components/Logo"
import { useState, useEffect } from "react"
import useLocalStorage from "./../../../features/Hooks.js/useLocalStore"
import { HeaderContainer } from "./HeaderStyled"
import HeaderChildForLaptop from "./HeaderChildForLaptop"
import HeaderChildForTabs from "./HeaderChildForTabs"

export default function Header() {
  const [isShown, setIsShown] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [user, setUser] = useLocalStorage("user") // eslint-disable-line no-unused-vars

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  function setVisibility() {
    setIsShown(!isShown)
  }

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo height="50" />
      <HeaderChildForLaptop
        user={user}
        setVisibility={setVisibility}
        setIsShown={setIsShown}
        isShown={isShown}
      />
      <HeaderChildForTabs
        user={user}
        setVisibility={setVisibility}
        setIsShown={setIsShown}
        isShown={isShown}
      />
    </HeaderContainer>
  )
}
