import styled from 'styled-components';
import { theme } from '../../styled/theme';

// PROFILE PAGE

export const ProfilePageInnerBanner = styled.div`
  display: flex;
  height: auto;
  align-items: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

// BANNER MAIN

export const BannerWrap = styled.div`
  width: 100%;
  height: 70vh;
  border-radius: 0px 0px 40px 40px;
  background-image: url(${(props) => props.backgroundImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    justify-content: center;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

export const BannerWrapInner = styled.div`
  display: flex;
  margin-left: 60px;
  margin-right: 60px;

  @media (max-width: 550px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 600px) {
    margin-left: 40px;
  }

  @media (max-width: 550px) {
    margin-left: 20px;
  }
`;

export const Avatar = styled.img`
  border-radius: 100px;
  height: 150px;
  width: 150px;
  object-fit: cover;
  border: 2px solid ${theme.greySecondary};
  margin-right: 30px;

  @media (max-width: 750px) {
    height: 120px;
    width: 120px;
  }

  @media (max-width: 600px) {
    height: 90px;
    width: 90px;
  }

  @media (max-width: 550px) {
    margin-bottom: 20px;
  }
`;

export const UserInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Stats

export const StatsBlock = styled.div`
  box-sizing: content-box;
  width: 200px;
  height: auto;
  background-color: ${theme.grayDark};
  border-radius: 20px;
  padding: 20px;
  margin: 20px 0px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (max-width: 600px) {
    align-self: center;
    width: 250px;
    margin: 20px 0px 20px 0px;
  }

  @media (max-width: 400px) {
    align-self: center;
    width: 200px;
  }
`;
