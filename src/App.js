import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import TasksSection from "./TasksSection";
import TasksContainer from "./TasksContainer";
import TasksHeader from "./TasksHeader";
import Container from "./Container";
import { GlobalStyles } from "./GlobalStyles";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <GlobalStyles />
      <Header title="Lista zadań" />
      <Form addNewTask={addNewTask} />
      <TasksSection>
        <TasksContainer>
          <TasksHeader title="Lista zadań" />
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        </TasksContainer>
        <Tasks
          tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />
      </TasksSection>
    </Container>
  );
}

export default App;
