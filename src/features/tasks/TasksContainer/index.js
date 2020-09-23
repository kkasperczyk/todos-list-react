import React from "react";
import { StyledTasksContainer } from "./styled";

const TasksContainer = ({ children }) => (
  <StyledTasksContainer>
      {children}
  </StyledTasksContainer>
);

export default TasksContainer;
