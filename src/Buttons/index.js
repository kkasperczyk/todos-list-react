import React from "react";
import { ButtonContainer, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <ButtonContainer>
      <Button
        onClick={toggleHideDone}
      >
        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
      </Button>
      <Button
        onClick={setAllDone}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </Button>
    </ButtonContainer>
  );

export default Buttons;
