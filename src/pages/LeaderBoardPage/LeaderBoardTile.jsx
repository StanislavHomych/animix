import PropTypes from "prop-types"
import { RegularText } from "../../styled/Headings"
import {
  LeaderBoardAvatar,
  LeaderBoardTileWrap,
  StyledBackgroundImg,
  ContentContainer,
} from "./LeaderBoardStyled"

export default function LeaderBoardTile({ data, index }) {
  return (
    <LeaderBoardTileWrap>
      <StyledBackgroundImg background={data.profileBg} />
      <ContentContainer>
        <RegularText fSize="1.1em">{index + 1}</RegularText>
        <LeaderBoardAvatar src={data.avatar} />
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
