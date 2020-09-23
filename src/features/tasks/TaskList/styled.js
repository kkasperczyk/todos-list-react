import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 20px;
  margin-top: 25px;
  list-style-type: none;
`;

export const Item = styled.li`
  padding: 10px;
  border-bottom: 2px solid #e8e8e8;
  display: flex;
  align-items: center;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  flex-grow: 1;
  margin: 0 10px;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const DoneButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: green;
  border: none;
  color: green;
  flex-shrink: 0;

  ${({ done }) =>
    done &&
    css`
      color: white;
    `}
`;

export const RemoveButton = styled.button`
  height: 30px;
  width: 30px;
  background-color: red;
  border: none;
  color: white;
  flex-shrink: 0;
`;
