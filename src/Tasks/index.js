import React from "react";
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks__list">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`js-tasks__list-item ${
          task.done && hideDone ? "tasks__list-item--hidden" : ""
        }`}
      >
        <button
          onClick={() => toggleTaskDone(task.id)}
          className={`js-done ${task.done ? "js-done--ticked" : ""}`}
        >
          ✔
        </button>
        <span
          className={`js-taskContent ${
            task.done ? "js-taskContent--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button onClick={() => removeTask(task.id)} className="js-remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
