import styled from 'styled-components';
import { theme } from '../styled/theme';

export const AnimeDetailWrapper = styled.div`
  height: 70vh;
  position: relative;
  display: flex;
`;

export const AnimeDetailInnerWrapper = styled.div`
  padding: 0px 40px 0px 40px;
  display: flex;
  align-items: center;
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 10vh 0px 20px 20px;
    justify-content: center;
  }
`;

export const AnimeTileWrap = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
`;

export const AnimeDetailMainContentWrap = styled.div`
  display: flex;
  padding: 20px 40px 0px 40px;

  @media (max-width: 1160px) {
    flex-direction: column;
  }
`;

export const AsideAnimeDetail = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 30%;

  @media (max-width: 1160px) {
    order: 2;
    flex-direction: row;
    width: 100%;
    padding: 20px 20px 0px 0px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const AboutSectionWrap = styled.div`
  @media (max-width: 1160px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const AsideAndAboutWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const AsideWrap = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;

  @media (max-width: 1160px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const TextArea = styled.textarea`
  background: #232323;
  border-radius: 20px;
  color: #fff;
  font-family: "Montserrat";
  font-size: 1em;
  font-weight: 600;
  padding: 10px 20px;
  text-align: left;
  resize: none;
`;

export const StyledSelect = styled.select`
  padding: 5px 5px;
  font-size: 1em;
  font-weight: 600;
  color: #fff;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.028);
  cursor: pointer;
  border-radius: 20px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:hover {
    border-color: #cecece;
  }

  &:focus {
    border-color: #d4d4d4;
    box-shadow: 0 0 5px rgba(172, 172, 172, 0.5);
    outline: none;
  }
`;

export const EpisodeThumbWrap = styled.div`
  display: flex;
  position: relative;
  border-radius: 10px;
  flex-wrap: wrap;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0000009d;
  }
`;

export const StyledOption = styled.option`
  background-color: #313131;
`;

export let StyledVideo = styled.video`
  object-fit: cover;
  opacity: 0.2;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -100;
  border-radius: 0 0 50px 50px;
`;
// OVERWIEV SECTION

export const CommentsMainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media (max-width: 1160px) {
    width: 100%;
    align-items: flex-end;
  }
`;

// EPISODES SECTION

export const EpisodesMainWrap = styled.div`
  padding: 0px 20px;

  @media (max-width: 1160px) {
    order: 1;
    padding: 0px;
  }
`;

export const SeasonSwitchContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0px;

  @media (max-width: 1160px) {
    margin: 20px 0px;
  }
`;

export const EpisodesInput = styled.input`
  outline: none;
  background-color: ${theme.blured};
  border: 2px solid ${theme.greySecondary};
  border-radius: 30px;
  padding: 10px;
  width: 50px;
  font-size: 0.8em;
`;

export const EpisodesListWrap = styled.div``;

// COMMENT SECTION
export const CommentWrap = styled.div`
  background-color: #3d3d3dc0;
  padding: 15px;
  border-radius: 20px;

  @media (max-width: 1160px) {
    width: 65%;
  }

  @media (max-width: 900px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    box-sizing: border-box;
    width: 100%;
  }
`;

export const RatingWrap = styled.div`
  padding: 5px 10px;
  background-color: #929292;
  border-radius: 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8em;
  font-weight: 600;
  display: flex;
`;

export const CommentDataWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: "#2f2f2f";
`;

export const DateContainer = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 0.8em;
  font-weight: 500;
  color: #929292;
`;

export const CommentDataMain = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 10px;
`;

export const UserAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100px;
`;

export const CommentText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 0.8em;
  color: #fff;
`;

export const ShowMoreComments = styled.button`
  width: 100%;
  background-color: ${theme.violetPrimary};
  padding: 10px 0px 10px 0;
  color: #fff;
  border-radius: 15px;
  border: none;
  font-weight: 700;

  @media (max-width: 1160px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
