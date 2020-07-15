import React from "react";
import "./style.css";

const Form = () => (
  <form className="form">
    <h2 className="form__header">Dodaj nowe zadanie</h2>
    <div className="form__main-content">
      <input
        className="form__input"
        autoFocus
        placeholder="Co jest do zrobienia?"
      />
      <button className="form__button">Dodaj zadanie</button>
    </div>
  </form>
);

export default Form;
