import styled from "styled-components"

export const BannerInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 40px;
  width: 50%;

  @media (max-width: 700px) {
    width: 100%;
    margin-right: 40px;
  }
`

export const BannerHeading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 3em;
  font-weight: 700;
  margin: 0;
  color: #fff;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`

export const BannerDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 1em;
  font-weight: 500;
  margin: 0;
  color: #fff;
`

export const Video = styled.video`
  object-fit: cover;
  opacity: 0.2;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -100;
  border-radius: 0 0 50px 50px;
`

export const VideoContainer = styled.div`
  height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
`
export const PreloaderImage = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  border-radius: 0px 0px 30px 30px;
  background-repeat: no-repeat;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0px 0px 30px 30px;
    z-index: 1;
  }
`
