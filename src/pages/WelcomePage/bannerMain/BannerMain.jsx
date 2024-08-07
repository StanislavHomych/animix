import { useState, useEffect } from "react"
import { ButtonMain } from "../../../styled/Buttons"
import { theme } from "../../../styled/theme"
import {
  BannerDescription,
  BannerHeading,
  BannerInnerContainer,
  Video,
  VideoContainer,
  PreloaderImage,
} from "./BannerMainStyled"
import { FaCirclePlay } from "react-icons/fa6"
import { useSelector } from "react-redux"
import { StyledNavLink } from "../../../styled/Links"

export default function BannerMain() {
  const animeList = useSelector((state) => state.anime.listOfAnime)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  let randomAnime = null

  let background =
    "https://anime-bannerpics.s3.eu-north-1.amazonaws.com/background.jpg"

  if (animeList && animeList.length > 0) {
    const randomNumber = Math.floor(Math.random() * animeList.length)
    randomAnime = animeList[randomNumber]
  }

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => {
      window.removeEventListener("resize", checkIsMobile)
    }
  }, [])

  return (
    <VideoContainer>
      {!videoLoaded && <PreloaderImage background={background} />}
      {randomAnime ? (
        <>
          <BannerInnerContainer>
            <BannerHeading>{randomAnime.name}</BannerHeading>
            <BannerDescription>{randomAnime.about}</BannerDescription>
            <StyledNavLink to={`/anime/${randomAnime.name}`}>
              <ButtonMain
                radius="50px"
                fSize="20px"
                bgColor={theme.violetPrimary}
              >
                <FaCirclePlay fontSize="1.1em" /> Watch
              </ButtonMain>
            </StyledNavLink>
          </BannerInnerContainer>
          {!isMobile ? (
            <Video
              key={randomAnime.trailer}
              width="320"
              height="240"
              playsInline
              preload="auto"
              autoPlay
              loop
              muted
              onCanPlay={() => setVideoLoaded(true)}
              style={{ display: videoLoaded ? "block" : "none" }}
            >
              <source src={randomAnime.trailer} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          ) : (
            <PreloaderImage background={randomAnime.banner} />
          )}
        </>
      ) : (
        <BannerInnerContainer>
          <BannerHeading>No Anime Available</BannerHeading>
          <BannerDescription>
            Please check back later for more anime updates.
          </BannerDescription>
        </BannerInnerContainer>
      )}
    </VideoContainer>
  )
}
