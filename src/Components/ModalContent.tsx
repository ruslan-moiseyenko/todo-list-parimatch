import React, { useState } from "react";
import { TodoType } from "../App";

export function ModalContent({
  info,
  selectedTodo
}: {
  info: TodoType[];
  selectedTodo: number;
}) {
  const [inputChecked, setInputChecked] = useState(
    info.find((item) => item.id === selectedTodo)?.checked
  );

  let selectedTodoItem = info.find((item) => item.id === selectedTodo);

  const onCheck = () => {
    setInputChecked(!inputChecked);
    if (selectedTodoItem !== undefined) {
      selectedTodoItem.checked = !selectedTodoItem?.checked;
    }
  };

  return (
    <div className="modal-content">
      <h2>{selectedTodoItem?.title}</h2>
      <p>Description:</p>
      <p>{selectedTodoItem?.description}</p>
      <div>
        Status:{" "}
        <input
          type="checkbox"
          checked={inputChecked}
          onChange={() => onCheck()}
        ></input>
      </div>
    </div>
  );
}
