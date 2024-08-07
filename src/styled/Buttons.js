import styled from 'styled-components';
import { theme } from './theme';

export const ButtonMain = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: ${(props) => props.radius || '15px'};
  color: #fff;
  padding: ${(props) => props.padding || '15px 20px'};
  width: ${(props) => props.width || '200px'};

  font-weight: ${(props) => props.weight || '700'};
  font-size: ${(props) => props.fSize || '1em'};
  width: ${(props) => props.width || '200px'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  cursor: pointer;
  @media (max-width: 1000px) {
    padding: 10px 15px;
  }

  @media (max-width: 500px) {
    font-size: 0.9em;
  }
`;

export const SeasonButton = styled.button`
  background-color: ${(props) => props.bgColor || '#7D7D7D'};
  color: ${(props) => props.color || '#fff'};
  border: none;
  font-weight: ${(props) => props.weight || '400'};

  border-radius: 100px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.greyTertiary};
  }
`;

export const SeasonButtonSm = styled.button`
  background-color: ${theme.greySecondary};
  color: #fff;
  outline: none;
  padding: 10px;
  border: none;
  border-radius: 100px;
  font-weight: 600;
`;
