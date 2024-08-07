import styled from 'styled-components';
import { theme } from '../../styled/theme';

export const SettingsPageWrap = styled.div`
  margin-top: 10vh;
  padding: 20px 40px 0px 40px;
  display: flex;
  height: 80vh;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SettingsInfo = styled.div``;

export const SettingsButtonNav = styled.button`
  background-color: ${theme.grayDark};
  border: 2px solid ${theme.greySecondary};
  padding: 7px 15px;
  outline: none;
  border-radius: 10px;
  font-weight: 600;
  color: #fff;
`;

export const SettingsNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 20px;

  @media (max-width: 700px) {
    flex-direction: row;
    margin: 0px 0px 15px 0px;
  }
`;
