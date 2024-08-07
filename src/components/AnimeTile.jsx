import { bool, object } from "prop-types"
import { Link } from "react-router-dom"
import { ButtonMain } from "../styled/Buttons"
import { theme } from "../styled/theme"
import { TileContainer } from "./animeTileStyled"
import { RatingContainer } from "./animeTileStyled"
import { TileImage } from "./animeTileStyled"
import { Overlay } from "./animeTileStyled"
import { AnimeDescription } from "./animeTileStyled"

export default function AnimeTile({ data, showOverlay }) {
  let rating = 0
  data.rating.forEach((element) => {
    rating += element.rating
  })

  return (
    <TileContainer>
      <RatingContainer>{rating.toFixed(1)}</RatingContainer>
      <TileImage src={data.cover} alt="cover" />
      {showOverlay && (
        <Overlay className="overlay">
          <AnimeDescription>{data.about}</AnimeDescription>
          <Link to={`/anime/${data.name}`}>
            <ButtonMain
              bgColor={theme.blured}
              width="100%"
              padding="6px 5px"
              radius="10px"
              weight="600"
              fSize="0.7"
            >
              Watch
            </ButtonMain>
          </Link>
        </Overlay>
      )}
    </TileContainer>
  )
}
AnimeTile.propTypes = {
  data: object.isRequired,
  showOverlay: bool,
}
