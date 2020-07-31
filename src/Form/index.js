import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <h2 className="form__header">Dodaj nowe zadanie</h2>
      <div className="form__main-content">
        <input
          value={newTaskContent}
          onChange={({ target }) => setNewTaskContent(target.value)}
          className="form__input"
          autoFocus
          placeholder="Co jest do zrobienia?"
        />
        <button className="form__button">Dodaj zadanie</button>
      </div>
    </form>
  );
};

export default Form;
