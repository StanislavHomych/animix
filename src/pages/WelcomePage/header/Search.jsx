import { useState, useEffect } from "react"
import { SearchBar, SearchResultImg, SearchResultItem } from "./HeaderStyled"
import { useSelector } from "react-redux"
import Loader from "../../../ui/Loader"
import { SearchBarResults } from "./HeaderStyled"
import { SearchBarContainer } from "./HeaderStyled"
import { StyledNavLink } from "../../../styled/Links"
import { func } from "prop-types"
import { ScrollBar } from "../../../styled/commonUi"

export default function Search({ toggleSidebar }) {
  const animeList = useSelector((state) => state.anime.listOfAnime)
  const [query, setQuery] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [isFocused, setIsFocused] = useState(false)
  const [isClickingResult, setIsClickingResult] = useState(false)

  useEffect(() => {
    if (animeList && animeList.length > 0) {
      setFilteredData(animeList)
    }
  }, [animeList])

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase()
    setQuery(value)
    filterData(value)
  }

  const filterData = (query) => {
    const filtered = animeList.filter((item) =>
      item.name.toLowerCase().includes(query)
    )
    setFilteredData(filtered)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (!isClickingResult) {
      setIsFocused(false)
    }
  }

  const handleMouseDown = () => {
    setIsClickingResult(true)
  }

  const handleMouseUp = () => {
    setIsClickingResult(false)
  }

  if (!animeList || animeList.length === 0) {
    return <Loader />
  }

  return (
    <SearchBarContainer>
      <SearchBar
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="search"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {isFocused && (
        <SearchBarResults>
          <ScrollBar dataLength={10}>
            {filteredData.slice(0, 5).map((item, index) => (
              <StyledNavLink
                to={`/anime/${item.name}`}
                onClick={toggleSidebar}
                key={index}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <SearchResultItem>
                  <p> {item.name}</p>
                  <SearchResultImg src={item.cover} />
                </SearchResultItem>
              </StyledNavLink>
            ))}
          </ScrollBar>
        </SearchBarResults>
      )}
    </SearchBarContainer>
  )
}

Search.propTypes = {
  toggleSidebar: func,
}
