import styled from 'styled-components';

export const RecentlyWatchedMainWrap = styled.div`
  margin: 20px 40px;
  width: calc(100% - 80px);
`;

export const RecentlyWatchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(250px, 1fr));
  gap: 10px;
  margin-top: 20px;
`;

export const RecentlyWatchInnerContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 200px;
  border-radius: 20px;
  padding: ${(props) => props.padding || '15px'};
  cursor: pointer;
`;

export const RecentlyWatchImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  z-index: -100;
`;

export const RecentlyWatchBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  border-radius: 10px;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }
`;
