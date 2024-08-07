import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AnimeTile from "../../../components/AnimeTile"
import { HeadingSecondary } from "../../../styled/Headings"
import { RubrickFullWrapper, RubrickFullInnerWrapper } from "./RubrickStyled"

function formatString(str) {
  let formattedStr = str.replace(/(?!^)([A-Z])/g, " $1")
  formattedStr = formattedStr.charAt(0).toUpperCase() + formattedStr.slice(1)

  return formattedStr
}

export default function RubrickFull() {
  const animeList = useSelector((state) => state.anime.listOfAnime)
  const { rubrick } = useParams()

  let animeToRender = animeList.filter((element) => {
    return (
      element.novelty ||
      element.editorsChoise ||
      element.classic ||
      element.movie
    )
  })

  return (
    <RubrickFullWrapper>
      <HeadingSecondary>{formatString(rubrick)}</HeadingSecondary>
      <RubrickFullInnerWrapper>
        {animeToRender.map((element) => {
          return (
            <AnimeTile key={element.id} data={element} showOverlay={true} />
          )
        })}
      </RubrickFullInnerWrapper>
    </RubrickFullWrapper>
  )
}
