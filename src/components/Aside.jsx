import {
  AsideAnimeDetail,
  AsideAndAboutWrap,
  AsideWrap,
  AboutSectionWrap,
  CommentsMainWrap,
} from "./AnimeDetailStyled"
import Review from "./Review"
import Comments from "./Comments"

import { HeadingSecondary, RegularText } from "../styled/Headings"
import { func, number, object, string } from "prop-types"

export default function Aside({ about, anime, ratingNum, handleRatingChange }) {
  return (
    <AsideAnimeDetail>
      <AsideAndAboutWrap>
        <AsideWrap>
          <HeadingSecondary margin="0">About</HeadingSecondary>
          <RegularText fw="400">{about}</RegularText>
        </AsideWrap>
        <AboutSectionWrap>
          <Review
            animeId={anime.id}
            rating={ratingNum}
            onChange={handleRatingChange}
            animeCover={anime.cover}
          />
        </AboutSectionWrap>
      </AsideAndAboutWrap>
      <CommentsMainWrap>
        <Comments data={anime} />
      </CommentsMainWrap>
    </AsideAnimeDetail>
  )
}

Aside.propTypes = {
  about: string,
  anime: object,
  ratingNum: number,
  handleRatingChange: func,
}
