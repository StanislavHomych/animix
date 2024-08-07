import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundMain};
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
  } 
`;
