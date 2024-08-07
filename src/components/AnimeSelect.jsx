import { useDispatch } from "react-redux"
import { updateUserCollection } from "../../store/slices/userSlice"
import { StyledSelect, StyledOption } from "./AnimeDetailStyled"
import PropTypes from "prop-types"
import useLocalStorage from "../features/Hooks.js/useLocalStore"
import { useState, useEffect } from "react"

const AnimeSelect = ({ anime }) => {
  const dispatch = useDispatch()
  const [user, setUser] = useLocalStorage("user", null)
  const [selectedValue, setSelectedValue] = useState("notSelected")

  useEffect(() => {
    if (user && user.userCollection) {
      for (const [collectionType, items] of Object.entries(
        user.userCollection
      )) {
        if (items.some((item) => item.movieId === anime.id)) {
          setSelectedValue(collectionType)
          break
        }
      }
    }
  }, [user, anime.id])

  const handleSelectChange = (event) => {
    const collectionType = event.target.value
    const movieId = anime.id
    const season = 0
    const episode = 1

    if (user) {
      dispatch(
        updateUserCollection({
          userId: user.id,
          collectionType,
          movieId,
          season,
          episode,
        })
      )

      // user collection update in local storage
      const updatedUser = { ...user }
      const userCollection = updatedUser.userCollection || {}
      userCollection[collectionType] = userCollection[collectionType] || []
      userCollection[collectionType].push({ movieId, season, episode })

      updatedUser.userCollection = userCollection
      setUser(updatedUser)

      setSelectedValue(collectionType)
    }
  }

  return (
    <StyledSelect value={selectedValue} onChange={handleSelectChange}>
      <StyledOption value="notSelected">Not selected</StyledOption>
      <StyledOption value="watched">Watched</StyledOption>
      <StyledOption value="postponed">Postponed</StyledOption>
      <StyledOption value="inPlans">In plans</StyledOption>
    </StyledSelect>
  )
}

AnimeSelect.propTypes = {
  anime: PropTypes.shape({
    id: PropTypes.number.isRequired,
    season: PropTypes.number,
    episode: PropTypes.number,
  }).isRequired,
}

export default AnimeSelect
