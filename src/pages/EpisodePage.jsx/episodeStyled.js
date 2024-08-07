import styled from 'styled-components';

export const EpisodeContainer = styled.div`
  padding: 20px 40px 10vh 40px;
`;

export const EpisodeControlContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CurrentAnimeTitle = styled.div`
  background-color: #3f3f3f;
  padding: 10px 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

export const AnimeCoverSmImg = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const NextEpisodeBtn = styled.button`
  background-color: #3f3f3f;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 12px 25px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2f2f2f;
  }
`;

export const EpisodeInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const EpisodesControll = styled.div`
  display: flex;
  gap: 10px;
`;
export const EpisodesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 15px 0px;
`;
