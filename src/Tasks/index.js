import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDone}) => (
  <ul className="tasks__list">
    {tasks.map((task, id) => (
      <li key={id} className={`js-tasks__list-item ${
        task.done && hideDone ? "tasks__list-item--hidden" : ""
      }`}>
        <button className={`js-done ${
          task.done ? "js-done--ticked" : ""
        }`}>
            ✔
        </button>
        <span className={`js-taskContent ${
          task.done ? "js-taskContent--done" : ""
        }`}>
           {task.content}
        </span>
        <button className="js-remove">
            🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
