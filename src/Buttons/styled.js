import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 20px;
  color: teal;
  transition: color 0.3s;

  &:hover {
    color: hsl(180, 100%, 35%);
  }

  &:active {
    color: hsl(180, 100%, 50%);
  }

  &:disabled {
    color: #ccc;
  }
`;
