import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Header from "./Header";
import TasksSection from "./TasksSection";
import TasksContainer from "./TasksContainer";
import TasksHeader from "./TasksHeader";
import Container from "./Container";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zjeść obiad", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Form />
      <TasksSection>
        <TasksContainer>
          <TasksHeader title="Lista zadań" />
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        </TasksContainer>
        <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} />
      </TasksSection>
    </Container>
  );
}

export default App;
