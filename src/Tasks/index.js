import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
  <ul className="tasks__list">
    {tasks.map((task) => (
      <li className={`js-tasks__list-item ${
        task.done && hideDoneTasks ? "tasks__list-item--hidden" : ""
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
