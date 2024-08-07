import { NavLink, Outlet } from "react-router-dom"
import {
  SettingsPageWrap,
  SettingsButtonNav,
  SettingsNavContainer,
  SettingsInfo,
} from "./settingsPageStyled"

export default function SettingsPage() {
  return (
    <SettingsPageWrap>
      <SettingsNavContainer>
        <NavLink to="acces">
          <SettingsButtonNav>Acces</SettingsButtonNav>
        </NavLink>
        <NavLink to="profile">
          <SettingsButtonNav>Profile</SettingsButtonNav>
        </NavLink>
      </SettingsNavContainer>
      <SettingsInfo>
        <Outlet />
      </SettingsInfo>
    </SettingsPageWrap>
  )
}
