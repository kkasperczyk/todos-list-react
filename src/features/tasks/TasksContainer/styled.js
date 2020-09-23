import styled from "styled-components";

export const StyledTasksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  border-bottom: 2px solid #e8e8e8;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding-bottom: 20px;
  }
`;
