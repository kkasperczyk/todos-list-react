import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <div className="tasks__buttonContainer">
      <button
        onClick={toggleHideDone}
        className="tasks__button js-hideDoneButton"
      >
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </button>
      <button
        onClick={setAllDone}
        className="tasks__button js-toggleAllDoneButton"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;
