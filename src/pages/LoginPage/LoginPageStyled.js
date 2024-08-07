import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  position: relative;
  height: 100%;
  width: 70%;
  overflow: hidden;

  @media (max-width: 800px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const StyledBackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  border-radius: 0 40px 40px 0px;
`;

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const LoginFormContainer = styled.div`
  height: 100vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  background: ${(props) => props.theme.backgroundMain};
  border: 2px solid ${(props) => props.theme.greySecondary};
  border-radius: 20px;
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  padding: 15px 20px;
  text-align: center;
  outline: none;

  @media (max-width: 1000px) {
    padding: 10px 15px;
    font-size: 0.8em;
  }
`;
