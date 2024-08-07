import styled from 'styled-components';

export const TileContainer = styled.div`
  border-radius: 15px;
  position: relative;
  width: 150px;
  &:hover .overlay {
    opacity: 1;
  }
`;
export const RatingContainer = styled.div`
  position: absolute;
  border-radius: 20px;
  padding: 3px 8px;
  background-color: #60a14a;
  right: 10px;
  top: 10px;
  font-weight: 600;
  color: #fff;
  font-family: "Montserrat", sans-serif;
`;

export const TileImage = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 10px;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 150px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.863);
  opacity: 0;
  border-radius: 10px;
  transition: opacity 0.3s ease;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AnimeDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #fff;
  font-size: 0.8em;
  margin: 0;
`;
