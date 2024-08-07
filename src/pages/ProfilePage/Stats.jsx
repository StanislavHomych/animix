import { theme } from "../../styled/theme"
import { RegularText } from "../../styled/Headings"
import { ButtonMain } from "../../styled/Buttons"
import { StatsBlock } from "./ProfilePageStyled"
import useLocalStorage from "../../features/Hooks.js/useLocalStore"
import { StyledNavLink } from "../../styled/Links"

export default function Stats() {
  const [localUser] = useLocalStorage("user", null) // eslint-disable-line no-unused-vars

  const watchTime = localUser?.watchTime || 0

  return (
    <StatsBlock>
      <RegularText fw="400">📺 Watching statistic</RegularText>
      <RegularText fSize="1em">{watchTime} hours of watching</RegularText>
      <StyledNavLink to="/myCollection">
        <ButtonMain bgColor={theme.violetPrimary}>My Collection</ButtonMain>
      </StyledNavLink>
    </StatsBlock>
  )
}
