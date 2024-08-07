// AnimePlayer.js
import { string } from "prop-types"
import { VideoContainer, Video } from "./videoPlayerStyled"

const AnimePlayer = ({ videoUrl }) => {
  return (
    <VideoContainer>
      <Video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  )
}

export default AnimePlayer

AnimePlayer.propTypes = {
  videoUrl: string,
}
