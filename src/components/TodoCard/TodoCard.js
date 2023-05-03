import React from "react";
import { BtnAction } from "../BtnAction/BtnAction";
import TodoCardCss from "./TodoCard.module.css";

export const TodoCard = ({ todo, handleDone, handleDelete }) => {
  return (
    <div className={TodoCardCss.wrapperCard}>
      <div className={todo.completed ? TodoCardCss.done : TodoCardCss.todoCard}>
        <h3>{todo.title}</h3>
      </div>
      <BtnAction onClick={handleDone} id={todo.id}>
        DONE
      </BtnAction>
      <BtnAction onClick={handleDelete} id={todo.id}>
        Delete
      </BtnAction>
    </div>
  );
};


