import { HeadingSecondary } from "../../../styled/Headings"
import RecentlyWatchedItem from "./RecentlyWatchedItem"
import { RecentlyWatchedMainWrap } from "./RecentlyWatchedStyled"

export default function RecentlyWatched() {
  return (
    <RecentlyWatchedMainWrap>
      <HeadingSecondary>RecentlyWatched</HeadingSecondary>
      <RecentlyWatchedItem />
    </RecentlyWatchedMainWrap>
  )
}
