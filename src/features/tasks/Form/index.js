import React, { useState, useRef } from "react";
import {
  FormContainer,
  FormHeader,
  FormMainContent,
  FormInput,
  FormSubmitButton,
} from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");

    focusInput();
  };

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <FormHeader>Dodaj nowe zadanie</FormHeader>
      <FormMainContent>
        <FormInput
          ref={inputRef}
          value={newTaskContent}
          onChange={({ target }) => setNewTaskContent(target.value)}
          autoFocus
          placeholder="Co jest do zrobienia?"
        />
        <FormSubmitButton>Dodaj zadanie</FormSubmitButton>
      </FormMainContent>
    </FormContainer>
  );
};

export default Form;
