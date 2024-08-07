import { HeadingSecondary, RegularText } from "../styled/Headings"
import { ButtonMain } from "../styled/Buttons"
import { TextArea } from "./AnimeDetailStyled"
import { theme } from "../styled/theme"
import { useState } from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { addCommentToUser } from "../../store/slices/userSlice"
import { addCommentToAnime } from "../../store/slices/animeListSlice"
import useLocalStorage from "../features/Hooks.js/useLocalStore"
import { BiCommentDetail } from "react-icons/bi"
import { fetchAnime } from "../../store/slices/animeListSlice"
import { CommentWrap, Star } from "./reviewStyled"
import { StarIcon } from "./reviewStyled"
import { StarsContainer } from "./reviewStyled"

export default function Review({ rating, onChange, animeId, animeCover }) {
  const [hoveredRating, setHoveredRating] = useState(null)
  const [selectedRating, setSelectedRating] = useState(rating)
  const [reviewComment, setReviewComment] = useState("")

  const dispatch = useDispatch()
  const [user, setUser] = useLocalStorage("user", null) // eslint-disable-line no-unused-vars

  const isLoggedIn = !!user

  const handleSubmit = () => {
    if (!isLoggedIn) return

    dispatch(
      addCommentToUser({
        userId: user.id,
        animeId,
        reviewComment,
        rating: selectedRating,
        cover: animeCover,
        date: Date.now(),
      })
    )
    dispatch(
      addCommentToAnime({
        animeId,
        userId: user.id,
        reviewComment,
        rating: selectedRating,
        avatar: user.avatar,
        date: Date.now(),
      })
    ).then(() => dispatch(fetchAnime()))

    setReviewComment("")
    setSelectedRating(0)
  }

  function onCommentChange(value) {
    setReviewComment(value)
  }

  const handleClick = (value) => {
    setSelectedRating(value)
    onChange(value)
  }

  const handleMouseEnter = (value) => {
    setHoveredRating(value)
  }

  const handleMouseLeave = () => {
    setHoveredRating(null)
  }

  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 10; i++) {
      stars.push(
        <Star
          key={i}
          active={hoveredRating >= i || selectedRating >= i}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
        >
          <StarIcon />
        </Star>
      )
    }
    return stars
  }

  return (
    <div>
      <HeadingSecondary margin="15px 0 0 0 ">Reviews</HeadingSecondary>
      <RegularText color="#848383" margin="0" fw="400" fSize="0.7em">
        Write a review
      </RegularText>
      <StarsContainer>{renderStars()}</StarsContainer>
      <CommentWrap>
        <TextArea
          placeholder="Share your impressions"
          value={reviewComment}
          onChange={(e) => onCommentChange(e.target.value)}
        />

        {!isLoggedIn && (
          <RegularText margin="0" fw="400" color={theme.errorRed}>
            Log in to write comments
          </RegularText>
        )}
        <ButtonMain
          onClick={handleSubmit}
          bgColor={theme.violetPrimary}
          padding="10px 0px"
          width="140px"
          disabled={!isLoggedIn} // Disable button if not logged in
        >
          Send <BiCommentDetail />
        </ButtonMain>
      </CommentWrap>
    </div>
  )
}

Review.propTypes = {
  rating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  animeId: PropTypes.number.isRequired,
  animeCover: PropTypes.string.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
}
