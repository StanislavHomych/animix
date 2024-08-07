import AnimeTile from "../../../components/AnimeTile"
import { useSelector } from "react-redux"
import { number, string } from "prop-types"
import { NavLink } from "react-router-dom"
import { HeadingSecondary } from "../../../styled/Headings"
import { ScrollBar } from "./../../../styled/commonUi"
import { WatchAllBtn } from "./RubrickStyled"
import {
  RubrickWrapper,
  RubrickInnerHeadingWrapper,
  RubrickInnerWrapper,
} from "./RubrickStyled"

export default function Rubrick({ rubrickName, rubrickId, rubrickRouteName }) {
  const animeList = useSelector((state) => state.anime.listOfAnime)

  const filterAnimeByCategory = () => {
    return animeList.filter((anime) => anime[rubrickRouteName] === true)
  }

  let animeToShowInRubrick = filterAnimeByCategory(rubrickId)

  return (
    <RubrickWrapper>
      <RubrickInnerHeadingWrapper>
        <HeadingSecondary>{rubrickName}</HeadingSecondary>
        <NavLink to={`/rubrick/${rubrickRouteName}`}>
          <WatchAllBtn>Watch all</WatchAllBtn>
        </NavLink>
      </RubrickInnerHeadingWrapper>
      <ScrollBar dataLength={10} hasMore={10 < animeList.length}>
        <RubrickInnerWrapper>
          {animeToShowInRubrick.slice(0, 10).map((element) => {
            return (
              <AnimeTile key={element.id} data={element} showOverlay={true} />
            )
          })}
        </RubrickInnerWrapper>
      </ScrollBar>
    </RubrickWrapper>
  )
}

Rubrick.propTypes = {
  rubrickName: string.isRequired,
  rubrickId: number.isRequired,
  rubrickRouteName: string.isRequired,
}
