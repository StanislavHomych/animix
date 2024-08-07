import { RegularText } from "../../../styled/Headings"
import {
  RecentlyWatchContainer,
  RecentlyWatchInnerContainer,
  RecentlyWatchImg,
  RecentlyWatchBackground,
} from "./RecentlyWatchedStyled"
import useLocalStorage from "../../../features/Hooks.js/useLocalStore"
import { useSelector } from "react-redux"
import { StyledNavLink } from "../../../styled/Links"
import PropTypes from "prop-types"

export default function RecentlyWatchedItem({ myCollection }) {
  const [localUser] = useLocalStorage("user", null)
  const animeList = useSelector((state) => state.anime.listOfAnime)

  let animeToRender = []

  if (localUser && localUser.recentlyWatched) {
    animeToRender = animeList.filter((element) => {
      return localUser.recentlyWatched.some(
        (watched) => watched.movieId === element.id
      )
    })

    if (!myCollection) {
      animeToRender = animeToRender.map((element) => {
        const watchedItem = localUser.recentlyWatched.find(
          (watched) => watched.movieId === element.id
        )
        return {
          ...element,
          season: watchedItem.season,
          episode: watchedItem.episode,
        }
      })
    } else {
      animeToRender = myCollection
    }
  }

  return (
    <RecentlyWatchContainer>
      {animeToRender.length > 0 ? (
        animeToRender.map((element) => (
          <RecentlyWatchInnerContainer key={element.id}>
            <StyledNavLink
              to={`/anime/${element.name}/${element.season}/${element.episode}`}
            >
              <RecentlyWatchBackground>
                <RecentlyWatchImg
                  src={
                    element?.listOfEpisodes?.[element.season]?.episodes?.[
                      element.episode
                    ]?.thumbnail
                  }
                  alt="recentlyWatched"
                />
              </RecentlyWatchBackground>
            </StyledNavLink>
            <RegularText
              position="absolute"
              bottom="20px"
              left="25px"
              fw="400"
              color="#fff"
              borderRadius="5px"
              zIndex="1000"
            >
              Season {element.season + 1}, Episode {element.episode + 1}
            </RegularText>
            <RegularText
              position="absolute"
              bottom="40px"
              left="25px"
              color="#fff"
              borderRadius="5px"
              fs="1em"
              zIndex="1000"
            >
              {element.name}
            </RegularText>
          </RecentlyWatchInnerContainer>
        ))
      ) : (
        <RecentlyWatchInnerContainer padding="0">
          <RegularText color="#fff" fw="600" fs="1.2em">
            You have not watched anything yet ¯\_(ツ)_/¯
          </RegularText>
        </RecentlyWatchInnerContainer>
      )}
    </RecentlyWatchContainer>
  )
}

RecentlyWatchedItem.propTypes = {
  myCollection: PropTypes.array,
}
