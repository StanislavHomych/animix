import styled from 'styled-components';

export const MyCollectionWrap = styled.div`
  margin-top: 10vh;
  padding: 0px 40px 0px 40px;
  height: 100%;

  @media (min-width: 600px) {
    height: 80vh;
  }
`;

export const MyCollectionButtonsWrap = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;

  @media (max-width: 540px) {
    flex-wrap: wrap;
  }
`;
