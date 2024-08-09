import styled from "styled-components"

export const LeaderBoardHeadingWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  flex-direction: column;
`

export const LeaderBoardInnerWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 10px;
  margin-top: 20px;
`

export const LeaderBoard = styled.div`
  margin-top: 10vh;
  padding: 0px 40px 0px 40px;
  height: 80vh;

  @media (max-width: 1170px) {
    height: 100%;
  }
`

export const LeaderBoardTileWrap = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 20px;
  background: #000;
`

export const LeaderBoardAvatar = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50px;
`

export const StyledBackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  opacity: 0.5;
  background-image: url(${(props) => props.background});
`

export const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
