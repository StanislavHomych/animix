import { HeadingSecondary } from "../../styled/Headings"
import { SeasonButton } from "../../styled/Buttons"
import { StyledNavLink } from "../../styled/Links"
import { Outlet } from "react-router-dom"
import { CollectionContext } from "../../features/Hooks.js/CollectionContext"
import { useState } from "react"
import { theme } from "../../styled/theme"
import { Helmet } from "react-helmet"

import {
  MyCollectionWrap,
  MyCollectionButtonsWrap,
} from "./MyCollectionPageStyled"

export default function MyCollectionPage() {
  const [activeBtn, setActiveBtn] = useState("watch")

  return (
    <MyCollectionWrap>
      <Helmet>
        <title>My collection</title>
      </Helmet>
      <HeadingSecondary>Collections</HeadingSecondary>
      <MyCollectionButtonsWrap>
        <StyledNavLink to="watched">
          <SeasonButton
            color={activeBtn === "Watched" ? theme.violetPrimary : "#fff"}
            bgColor={activeBtn === "Watched" ? "#fff" : theme.greySecondary}
            weight="600"
          >
            Watched
          </SeasonButton>
        </StyledNavLink>

        <StyledNavLink to="postponed">
          <SeasonButton
            color={activeBtn === "Postponed" ? theme.violetPrimary : "#fff"}
            bgColor={activeBtn === "Postponed" ? "#fff" : theme.greySecondary}
            weight="600"
          >
            Postponed
          </SeasonButton>
        </StyledNavLink>
        <StyledNavLink to="inplans">
          <SeasonButton
            color={activeBtn === "In plans" ? theme.violetPrimary : "#fff"}
            bgColor={activeBtn === "In plans" ? "#fff" : theme.greySecondary}
            weight="600"
          >
            In plans
          </SeasonButton>
        </StyledNavLink>
      </MyCollectionButtonsWrap>
      <CollectionContext.Provider value={{ setActiveBtn }}>
        <Outlet />
      </CollectionContext.Provider>
    </MyCollectionWrap>
  )
}
