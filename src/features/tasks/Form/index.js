import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import {
  FormContainer,
  FormHeader,
  FormMainContent,
  FormInput,
  FormSubmitButton,
} from "./styled";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

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
