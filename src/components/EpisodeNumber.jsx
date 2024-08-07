import { func, number, object } from "prop-types"
import { EpisodesInput } from "./AnimeDetailStyled"

export default function EpisodeNumber({
  anime,
  season,
  setFilteredElements,
  setNoEpisodesToShow,
}) {
  function filterElements(value) {
    const numericValue = parseInt(value, 10)

    if (
      numericValue < 1 ||
      numericValue > anime.listOfEpisodes[season]?.episodes.length
    ) {
      setNoEpisodesToShow(true)
    } else {
      setNoEpisodesToShow(false)

      let list = anime.listOfEpisodes[season].episodes.slice(
        numericValue - 1,
        numericValue
      )

      list = list.map((episode) => ({
        ...episode,
        id: numericValue - 1,
      }))
      setFilteredElements(list)
    }
  }

  return (
    <EpisodesInput
      onChange={(e) => filterElements(e.target.value)}
      type="number"
      placeholder="Number"
    />
  )
}

EpisodeNumber.propTypes = {
  anime: object.isRequired,
  season: number.isRequired,
  setFilteredElements: func.isRequired,
  setNoEpisodesToShow: func,
}
