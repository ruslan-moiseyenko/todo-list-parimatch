import React, { useState } from "react";
import { TodoType } from "../App";

export function ModalContent({
  info,
  checkTodo
}: {
  info: TodoType;
  checkTodo: (id: number) => void;
}) {
  const [inputChecked, setInputChecked] = useState(info.checked);

  const onCheck = (id: number) => {
    checkTodo(id);
    setInputChecked(!inputChecked);
  };

  return (
    <div className="modal-content">
      <h2>{info.title}</h2>
      <p>Description:</p>
      <p>{info.description}</p>
      <div>
        Status:{" "}
        <input
          type="checkbox"
          // defaultChecked={false}
          checked={inputChecked}
          onChange={() => onCheck(info.id)}
        ></input>
      </div>
    </div>
  );
}
