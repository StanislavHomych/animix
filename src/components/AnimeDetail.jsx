import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchAnime } from "../../store/slices/animeListSlice"
import { useEffect, useState } from "react"
import AnimeTile from "./AnimeTile"
import {
  HeadingSecondary,
  HeadingPrimary,
  RegularText,
} from "../styled/Headings"
import { ButtonMain, SeasonButtonSm } from "../styled/Buttons"
import { theme } from "../styled/theme"
import EpisodesList from "../pages/EpisodePage.jsx/EpisodesList"
import {
  StyledVideo,
  AnimeDetailWrapper,
  AnimeDetailInnerWrapper,
  SelectWrapper,
  AnimeDetailMainContentWrap,
  EpisodesMainWrap,
  SeasonSwitchContainer,
  AnimeTileWrap,
} from "./AnimeDetailStyled"
import AnimeSelect from "./AnimeSelect"
import { StyledNavLink } from "../styled/Links"
import { formatDate } from "../features/formatDate"
import EpisodeNumber from "./EpisodeNumber"
import Aside from "./Aside"
import Loader from "../ui/Loader"
import { PreloaderImage } from "./../pages/WelcomePage/bannerMain/BannerMainStyled"

export default function AnimeDetail() {
  const dispatch = useDispatch()
  const animeListStatus = useSelector((state) => state.anime.status)
  const { animeTitle } = useParams()
  const animeList = useSelector((state) => state.anime.listOfAnime)
  const [season, setSeason] = useState(0)
  const [filteredElements, setFilteredElements] = useState([])
  const [ratingNum, setRatingNum] = useState(0)
  const [noEpisodesToShow, setNoEpisodesToShow] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const handleRatingChange = (newRating) => {
    setRatingNum(newRating)
  }

  useEffect(() => {
    if (animeListStatus === "idle") {
      dispatch(fetchAnime())
    }

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [animeListStatus, dispatch])

  useEffect(() => {
    if (animeListStatus === "idle") {
      dispatch(fetchAnime())
    }
  }, [animeListStatus, dispatch])

  const anime = animeList.find((element) => element.name === animeTitle)
  if (!anime) {
    return <Loader />
  }

  const {
    name,
    seriesReleaseDates,
    rating,
    about,
    listOfEpisodes,
    trailer,
    banner,
  } = anime

  let [, month, year] = formatDate(seriesReleaseDates)

  let animeRating = 0 // eslint-disable-line no-unused-vars

  rating.forEach((element) => {
    animeRating += element.rating
  })

  const episodes =
    filteredElements.length === 0
      ? anime.listOfEpisodes[season]?.episodes || []
      : filteredElements

  // add index to episode
  const episodesWithIndex = episodes.map((episode, index) => ({
    ...episode,
    index,
  }))

  return (
    <div>
      <AnimeDetailWrapper>
        <AnimeDetailInnerWrapper>
          <AnimeTileWrap>
            <AnimeTile data={anime} showOverlay={false}></AnimeTile>
          </AnimeTileWrap>
          <div
            style={{
              margin: "30px",
            }}
          >
            <HeadingPrimary fSizeLg="2.5em" fSizeMd="1.8em" fSizeSm="2em">
              {name}
            </HeadingPrimary>
            <RegularText fw="500" fSizeMd="0.8em">
              Release: {listOfEpisodes.length} episodes, {month} {year}
            </RegularText>
            <RegularText
              fw="500"
              margin="10px 0px 10px 0px"
              fSize="1.1em"
              fSizeMd="0.9em"
            >
              {about}
            </RegularText>
            <SelectWrapper>
              <StyledNavLink to={`/anime/${animeTitle}/${0}/${0}`}>
                <ButtonMain
                  bgColor={theme.violetPrimary}
                  padding="7px 5px"
                  width="110px"
                >
                  1 episode
                </ButtonMain>
              </StyledNavLink>

              <AnimeSelect anime={anime} />
            </SelectWrapper>
          </div>
        </AnimeDetailInnerWrapper>
        {isMobile ? (
          <PreloaderImage background={banner} />
        ) : (
          <StyledVideo width="320" height="240" autoPlay loop muted>
            <source src={trailer} type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        )}
      </AnimeDetailWrapper>
      <AnimeDetailMainContentWrap>
        <Aside
          about={about}
          anime={anime}
          ratingNum={ratingNum}
          handleRatingChange={handleRatingChange}
        />
        <EpisodesMainWrap>
          <HeadingSecondary>Watch series</HeadingSecondary>
          <SeasonSwitchContainer>
            <EpisodeNumber
              anime={anime}
              season={season}
              episodesWithIndex={episodesWithIndex}
              setFilteredElements={setFilteredElements}
              setNoEpisodesToShow={setNoEpisodesToShow}
            />

            {listOfEpisodes.map((element, index) => {
              return (
                <SeasonButtonSm
                  onClick={() => {
                    setSeason(index)
                  }}
                  key={element.season}
                >{`season ${index + 1}`}</SeasonButtonSm>
              )
            })}
          </SeasonSwitchContainer>
          <EpisodesList
            listOfEpisodes={
              filteredElements.length == 0
                ? anime.listOfEpisodes[season].episodes
                : episodesWithIndex
            }
            anime={anime}
            season={season}
            noEpisodesToShow={noEpisodesToShow}
          />
        </EpisodesMainWrap>
      </AnimeDetailMainContentWrap>
    </div>
  )
}
