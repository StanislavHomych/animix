import styled from 'styled-components';
import { theme } from '../../styled/theme';

export const Input = styled.input`
  padding: 10px;
  font-weight: 500;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
`;

export const SettingsInnerWrapper = styled.div`
  background-color: ${theme.grayDarkest};
  padding: 20px;
  max-width: 600px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PasswordChangeForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
