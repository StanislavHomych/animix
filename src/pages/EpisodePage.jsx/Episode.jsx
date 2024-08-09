import { useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import VideoPlayer from "./VideoPlayer"
import { HeadingSecondary, RegularText } from "../../styled/Headings"
import EpisodesList from "./EpisodesList"
import { SeasonButton } from "../../styled/Buttons"
import EpisodeNumber from "../../components/EpisodeNumber"
import Loader from "./../../ui/Loader"
import {
  EpisodeContainer,
  EpisodeControlContainer,
  CurrentAnimeTitle,
  AnimeCoverSmImg,
  NextEpisodeBtn,
  EpisodeInfo,
  EpisodesControll,
  EpisodesWrap,
} from "./episodeStyled"
import { Helmet } from "react-helmet"

const Episode = () => {
  const animeList = useSelector((state) => state.anime.listOfAnime)
  const [filteredElements, setFilteredElements] = useState([])
  const [noEpisodesToShow, setNoEpisodesToShow] = useState(false)
  const navigate = useNavigate()

  const { animeTitle, episode } = useParams()
  const [season, setSeason] = useState(0)

  if (!animeList) {
    return <Loader />
  }

  const currentAnime = animeList.find((anime) => anime.name === animeTitle)

  if (!currentAnime) {
    return <div>No Anime Found</div>
  }

  const currentSeasonEpisodes = currentAnime.listOfEpisodes[season]?.episodes
  const episodeIndex = parseInt(episode)

  if (!currentSeasonEpisodes || !currentSeasonEpisodes[episodeIndex]) {
    navigate(`/anime/${currentAnime.name}/${season + 1}/0`)
  }

  const isLastEpisodeInSeason = episodeIndex + 1 >= currentSeasonEpisodes.length
  const isLastSeason = season + 1 >= currentAnime.listOfEpisodes.length

  const episodes =
    filteredElements.length === 0
      ? currentSeasonEpisodes || []
      : filteredElements

  const episodesWithIndex = episodes.map((episode, index) => ({
    ...episode,
    index,
  }))

  console.log(currentAnime.listOfEpisodes[season].episodes[episodeIndex].link)

  return (
    <>
      <Helmet>
        <title>{`Animix - ${currentAnime.name}`}</title>
      </Helmet>
      <VideoPlayer
        key={currentAnime.listOfEpisodes[season].episodes[episodeIndex].link} // Add key to force re-render
        videoUrl={
          currentAnime.listOfEpisodes[season].episodes[episodeIndex].link
        }
      />
      <EpisodeContainer>
        <EpisodeControlContainer>
          <CurrentAnimeTitle>
            <AnimeCoverSmImg src={currentAnime.cover} alt="" />
            <RegularText>{animeTitle}</RegularText>
          </CurrentAnimeTitle>
          {!isLastEpisodeInSeason || !isLastSeason ? (
            <NextEpisodeBtn
              onClick={() => {
                if (isLastEpisodeInSeason) {
                  setSeason((prevSeason) => prevSeason + 1)
                  navigate(`/anime/${currentAnime.name}/${season + 1}/0`)
                } else {
                  navigate(
                    `/anime/${currentAnime.name}/${season}/${episodeIndex + 1}`
                  )
                }
              }}
            >
              <RegularText>
                {isLastEpisodeInSeason ? "Next season" : "Next episode"}
              </RegularText>
            </NextEpisodeBtn>
          ) : null}
        </EpisodeControlContainer>

        <EpisodeInfo>
          <HeadingSecondary>{`Episode ${episodeIndex + 1}, Season ${
            Number(season) + 1
          }`}</HeadingSecondary>
        </EpisodeInfo>

        <EpisodesControll>
          <EpisodeNumber
            anime={currentAnime}
            season={season}
            setFilteredElements={setFilteredElements}
            episodesWithIndex={episodesWithIndex}
            setNoEpisodesToShow={setNoEpisodesToShow}
          />
          {currentAnime.listOfEpisodes.map((element, index) => (
            <SeasonButton
              onClick={() => {
                setSeason(index)
                navigate(`/anime/${currentAnime.name}/${index}/0`)
              }}
              key={element.season}
            >
              {element.season} season
            </SeasonButton>
          ))}
        </EpisodesControll>
        <EpisodesWrap>
          <EpisodesList
            listOfEpisodes={
              filteredElements.length === 0
                ? currentSeasonEpisodes
                : episodesWithIndex
            }
            anime={currentAnime}
            season={Number(season)}
            noEpisodesToShow={noEpisodesToShow}
          />
        </EpisodesWrap>
      </EpisodeContainer>
    </>
  )
}

export default Episode
