import { useState } from "react"
import {
  CommentText,
  CommentWrap,
  UserAvatar,
  RatingWrap,
  DateContainer,
  CommentDataMain,
  ShowMoreComments,
  CommentDataWrap,
} from "./AnimeDetailStyled"
import { IoIosStar } from "react-icons/io"
import { object } from "prop-types"
import { formatDate } from "../features/formatDate"
import { theme } from "../styled/theme"

const defaultAvatar =
  "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/defaultavatar.jpg"

export default function Comments({ data }) {
  const [visibleComments, setVisibleComments] = useState(5)

  const handleAvatarError = (event) => {
    event.target.src = defaultAvatar
  }

  const handleShowMore = () => {
    setVisibleComments((prev) => prev + 5) // Add 5 more comments
  }

  return (
    <>
      {data.comments.slice(0, visibleComments).map((element) => {
        const [day, month, year] = formatDate(element.date)

        return (
          <CommentWrap key={element.date}>
            <CommentDataWrap>
              <RatingWrap>
                <IoIosStar color="#FFD700" />
                {element.rating}
              </RatingWrap>
              <DateContainer>{`${day} ${month} ${year}`}</DateContainer>
            </CommentDataWrap>
            <CommentDataMain>
              <UserAvatar
                src={element.avatar}
                alt="Avatar"
                onError={handleAvatarError}
                style={{}}
              />
              <CommentText>{element.reviewComment}</CommentText>
            </CommentDataMain>
          </CommentWrap>
        )
      })}

      {visibleComments < data.comments.length && (
        <ShowMoreComments
          width="100%"
          bgColor={theme.violetPrimary}
          onClick={handleShowMore}
        >
          Show More
        </ShowMoreComments>
      )}
    </>
  )
}

Comments.propTypes = {
  data: object.isRequired,
}
