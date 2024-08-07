import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  position: relative;
  gap: 20px;
  margin-top: 20px;
  bottom: 0;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 100%;
    padding-bottom: 20px;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
`;
