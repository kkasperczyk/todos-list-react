import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: white;
`;

export const FormHeader = styled.h2`
  padding: 20px;
  margin: 0;

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

export const FormMainContent = styled.div`
  padding: 20px;
  border-top: 2px solid #e8e8e8;
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
    flex-basis: 100%;
  }
`;

export const FormInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 800px;
  margin-right: 20px;
  flex-grow: 1;
  border: 2px solid #e8e8e8;

  &:placeholder {
    color: hsl(0, 0%, 75%);
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: unset;
  }
`;

export const FormSubmitButton = styled.button`
  padding: 10px;
  background-color: hsl(180, 100%, 25%);
  color: hsl(179, 58%, 88%);
  font-weight: 300;
  border: none;
  transition: background-color 1s, transform 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: hsl(180, 100%, 35%);
  }

  @media (max-width: 767px) {
    margin-top: 10px;
    width: 100%;
  }
`;
