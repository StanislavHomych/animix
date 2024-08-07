import PropTypes from "prop-types"
import { HiddenMenuContainer, LinkSettings } from "./HeaderStyled"
import { useEffect } from "react"

export default function HiddenMenu({ isShown, setVisibility }) {
  const handleClickOutside = (event) => {
    if (isShown && !event.target.closest(".hidden-menu-container")) {
      setVisibility(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShown, setVisibility])

  return (
    isShown && (
      <HiddenMenuContainer className="hidden-menu-container">
        <LinkSettings to="/profile" onClick={() => setVisibility(false)}>
          👲 Profile
        </LinkSettings>
        <LinkSettings to="/settings" onClick={() => setVisibility(false)}>
          ⚙️ Settings
        </LinkSettings>
      </HiddenMenuContainer>
    )
  )
}

HiddenMenu.propTypes = {
  isShown: PropTypes.bool.isRequired,
  setVisibility: PropTypes.func.isRequired,
}
