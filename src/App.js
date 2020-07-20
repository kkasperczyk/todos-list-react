import React from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Header from './Header';
import TasksSection from './TasksSection';
import TasksContainer from './TasksContainer';
import TasksHeader from './TasksHeader';
import Container from './Container';

const tasks = [
  { id: 1, content: "przejść na Reacta", done: false },
  { id: 2, content: "zjeść obiad", done: true },
];

const hideDone = false;

function App() {
  return (
      <Container>
        <Header title="Lista zadań" />
        <Form />
        <TasksSection>
          <TasksContainer>
            <TasksHeader title="Lista zadań" />
            <Buttons tasks={tasks} hideDone={hideDone} />
          </TasksContainer>
          <Tasks tasks={tasks} hideDone={hideDone} />
        </TasksSection>
      </Container>
  );
}

export default App;
