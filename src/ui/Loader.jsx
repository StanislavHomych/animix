import { Player } from "@lottiefiles/react-lottie-player"
import animationData from "./animationData.json"

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Player
        autoplay
        loop
        src={animationData}
        style={{
          width: "30%",
          height: "30%",
        }}
      />
    </div>
  )
}

export default Loader
