import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
    <div className="tasks__buttonContainer">
      <button className="tasks__button js-hideDoneButton">
        {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
      </button>
      <button
        className="tasks__button js-toggleAllDoneButton"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  )
);

export default Buttons;
