import styled from 'styled-components';
import { theme } from '../../styled/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.grayDarkest};
  border-radius: 20px;
  height: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  min-width: 400px;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 500px) {
    min-width: 300px;
  }

  @media (max-width: 370px) {
    min-width: 250px;
  }
`;

export const FileInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    span {
      font-weight: 500;
      margin-bottom: 5px;
      font-family: "Montserrat", sans-serif;
      font-size: 0.8em;
    }
  }
`;

export const FileInput = styled.div`
  position: relative;
  display: inline-block;

  input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  span {
    display: inline-block;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    user-select: none;
  }

  &:hover span {
    background-color: #f1f1f1;
  }
`;

export const TextInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    span {
      font-weight: bold;
      margin-bottom: 5px;
    }

    input {
      padding: 10px;
      font-weight: 500;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-family: "Montserrat", sans-serif;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`;
