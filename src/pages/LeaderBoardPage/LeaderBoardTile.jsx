import PropTypes from "prop-types"
import { RegularText } from "../../styled/Headings"
import {
  LeaderBoardAvatar,
  LeaderBoardTileWrap,
  StyledBackgroundImg,
  ContentContainer,
} from "./LeaderBoardStyled"

const defaultBackground =
  "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/background.jpg"

const defaultAvatar =
  "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/defaultavatar.jpg"

export default function LeaderBoardTile({ data, index }) {
  return (
    <LeaderBoardTileWrap>
      <StyledBackgroundImg background={data.profileBg || defaultBackground} />
      <ContentContainer>
        <RegularText fSize="1.1em">{index + 1}</RegularText>
        <LeaderBoardAvatar src={data.avatar || defaultAvatar} />
        <RegularText shadow="true">{data.nickname}</RegularText>
        <RegularText fSize="0.7em">
          {data.watchTime} hours of watch time
        </RegularText>
      </ContentContainer>
    </LeaderBoardTileWrap>
  )
}

LeaderBoardTile.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
}
