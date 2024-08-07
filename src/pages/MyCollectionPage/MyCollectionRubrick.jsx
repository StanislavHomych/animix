import useLocalStorage from "../../features/Hooks.js/useLocalStore"
import { HeadingSecondary, RegularText } from "../../styled/Headings"
import { useSelector } from "react-redux"
import RecentlyWatchedItem from "../WelcomePage/recentlyWatched/RecentlyWatchedItem"
import { string } from "prop-types"
import { useCollection } from "../../features/Hooks.js/CollectionContext"
import { useEffect } from "react"

export default function MyCollectionRubrick({ collectionElement, title }) {
  const [localUser, setLocalUser] = useLocalStorage("user", null) // eslint-disable-line no-unused-vars
  const animeList = useSelector((state) => state.anime.listOfAnime)
  const { setActiveBtn } = useCollection()

  useEffect(() => {
    setActiveBtn(title)
  }, [title, setActiveBtn])

  if (!localUser || !localUser.userCollection) {
    return (
      <HeadingSecondary margin="15px 0 15px 0">{`wow, so empty (‾́。‾́ )`}</HeadingSecondary>
    )
  }

  const collection = localUser.userCollection[collectionElement]
  if (!collection || collection.length === 0) {
    return (
      <HeadingSecondary margin="15px 0 15px 0">{`wow, so empty (‾́。‾́ )`}</HeadingSecondary>
    )
  }

  let animeToRender = animeList
    .filter((element) => {
      return collection.some((watched) => watched.movieId === element.id)
    })
    .map((element) => {
      const watched = collection.find(
        (watched) => watched.movieId === element.id
      )
      return {
        ...element,
        season: watched.season,
        episode: watched.episode,
      }
    })

  return (
    <div>
      <RegularText margin="15px 0px 15px 0">{title}</RegularText>
      <div>
        <RecentlyWatchedItem myCollection={animeToRender} />
      </div>
    </div>
  )
}

MyCollectionRubrick.propTypes = {
  collectionElement: string.isRequired,
  title: string.isRequired,
}
