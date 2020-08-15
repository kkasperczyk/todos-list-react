import React from "react";
import { List, Item, Content, DoneButton, RemoveButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <DoneButton
          onClick={() => toggleTaskDone(task.id)}
          done={task.done}
        >
          ✔
        </DoneButton>
        <Content done={task.done}>{task.content}</Content>
        <RemoveButton onClick={() => removeTask(task.id)}>
          🗑
        </RemoveButton>
      </Item>
    ))}
  </List>
);

export default Tasks;
