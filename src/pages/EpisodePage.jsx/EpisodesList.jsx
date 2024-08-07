import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { bool } from "prop-types"
import { useDispatch } from "react-redux"
import { updateRecentlyWatched } from "../../../store/slices/userSlice"
import useLocalStorage from "../../features/Hooks.js/useLocalStore"
import { HeadingSecondary } from "../../styled/Headings"
import PropTypes from "prop-types"

export const EpisodesListWrap = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 650px) {
    gap: 20px;
    justify-content: space-between;
  }

  @media (max-width: 450px) {
    gap: 20px;
  }
`

export const EpisodeThumbWrap = styled.div`
  display: flex;
  position: relative;
  border-radius: 10px;
  height: 180px;

  flex-wrap: wrap;
  cursor: pointer;
  background-color: #0000009d;
  transition: background-color 0.3s;

  &:hover {
    background-color: transparent;
  }


  @media (max-width: 1161px) {
    width: calc(33% - 20px);
  }



  @media (max-width: 750px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 450px) {
    width: 100%;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    z-index: -100;
  }

  p {
    position: absolute;
    bottom: 10px;
    left: 10px;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    font-weight: 600;
  }
`

export default function EpisodesList({
  listOfEpisodes,
  anime,
  season,
  noEpisodesToShow,
}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [localUser, setLocalUser] = useLocalStorage("user", null)

  if (!listOfEpisodes || !anime || typeof season !== "number") {
    return <div>нема епізодів</div>
  }

  const handleWatchClick = (movieId, episode) => {
    if (localUser) {
      const updatedRecentlyWatched = Array.isArray(localUser.recentlyWatched)
        ? [...localUser.recentlyWatched]
        : []

      const existingIndex = updatedRecentlyWatched.findIndex(
        (item) => item.movieId === movieId
      )

      if (existingIndex > -1) {
        updatedRecentlyWatched.splice(existingIndex, 1)
      } else {
        updatedRecentlyWatched.unshift({ movieId, season, episode })
      }

      const limitedRecentlyWatched = updatedRecentlyWatched.slice(0, 3)

      dispatch(
        updateRecentlyWatched({
          userId: localUser.id,
          movieId,
          season,
          episode,
        })
      )

      setLocalUser({
        ...localUser,
        recentlyWatched: limitedRecentlyWatched,
      })
    } else {
      alert("Please log in first.")
    }
  }

  const episodes = listOfEpisodes || []
  if (noEpisodesToShow) {
    return (
      <HeadingSecondary>{`There are no episodes (╯°益°)╯`}</HeadingSecondary>
    )
  }

  console.log(episodes)
  return (
    <EpisodesListWrap>
      {episodes.map((episode, index) => (
        <EpisodeThumbWrap
          key={index}
          onClick={() => {
            handleWatchClick(anime.id, index)
            navigate(
              `/anime/${anime.name}/${season}/${
                episode.id != null ? episode.id + 1 : index
              }`
            )
          }}
        >
          <img
            src={episode.thumbnail}
            alt={`Episode ${index + 1}`}
            width={200}
            height={120}
          />
          <p>Episode {episode.id != null ? episode.id + 1 : index + 1}</p>
        </EpisodeThumbWrap>
      ))}
    </EpisodesListWrap>
  )
}

EpisodesList.propTypes = {
  listOfEpisodes: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  anime: PropTypes.object,
  season: PropTypes.number,
  noEpisodesToShow: bool,
}
