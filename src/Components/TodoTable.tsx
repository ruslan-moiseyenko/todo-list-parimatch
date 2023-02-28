import React from "react";
import { TodoType } from "../App";

export function TodoTable({
  todo,
  checkTodo,
  onClick
}: {
  todo: TodoType[];
  checkTodo: (id: number) => void;
  onClick: (id: number) => void;
}) {
  const onCheck = (id: number) => {
    checkTodo(id);
  };

  const onItemClick = (id: number) => {
    onClick(id);
  };

  return (
    <div className="todoList ">
      <div className="todoListTitle todoListRow">
        <div className="todoTable">ID</div>
        <div className="todoTable">TITLE</div>
        <div className="todoTable">DESCRIPTION</div>
        <div className="todoTable">STATUS</div>
      </div>

      {todo.map(({ id, title, description, checked }) => {
        return (
          <div
            key={id}
            className=" todoListRow"
            onClick={() => onItemClick(id)}
          >
            <div className="todoTable todiCell">{id}</div>
            <div className="todoTable todiCell">{title}</div>
            <div className="todoTable todiCell">{description}</div>
            <div className="todoTable todiCell"></div>
            <input
              type="checkbox"
              className="checkbox"
              checked={checked}
              //onChange={() => onCheck(id)}
            ></input>
          </div>
        );
      })}
    </div>
  );
}
