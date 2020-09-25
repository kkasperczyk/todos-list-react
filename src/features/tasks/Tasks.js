import React from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Header from "../../common/Header";
import TasksSection from "./TasksSection";
import TasksContainer from "./TasksContainer";
import TasksHeader from "./TasksHeader";
import Container from "../../common/Container";
import { GlobalStyles } from "../../GlobalStyles";

function Tasks() {
  return (
    <Container>
      <GlobalStyles />
      <Header title="Lista zadań" />
      <Form />
      <TasksSection>
        <TasksContainer>
          <TasksHeader title="Lista zadań" />
          <Buttons />
        </TasksContainer>
        <TaskList />
      </TasksSection>
    </Container>
  );
}

export default Tasks;
