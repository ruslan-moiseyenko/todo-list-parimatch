import React, { useState } from "react";
import "./App.css";
import { InputForm } from "./Components/InputForm";
import { Modal } from "./Components/Modal";
import { ModalContent } from "./Components/ModalContent";
import { TodoTable } from "./Components/TodoTable";

export type TodoType = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
};

function App() {
  const [todo, setTodo] = useState<TodoType[]>([]);
  const [id, setId] = useState(1);
  const [selectedTodo, setSelectedTodo] = useState(0);
  const [modal, setModal] = useState(false);

  //add new item to out todo list
  const addHandler = (titleInput: string, descriptionInput: string) => {
    setTodo([
      ...todo,
      { id, title: titleInput, description: descriptionInput, checked: false }
    ]);
    setId((prevID) => prevID + 1);
  };

  //toggle modal window
  const toggleModal = () => {
    setModal(!modal);
  };

  //actions when we click on a todo item in the todo table
  const onTodoClick = (id: number) => {
    setSelectedTodo(id);
    toggleModal();
  };

  return (
    <div className="container">
      <InputForm addHandler={addHandler} />
      <TodoTable todo={todo} onClick={onTodoClick} />
      {modal && (
        <Modal onClose={toggleModal}>
          <ModalContent info={todo} selectedTodo={selectedTodo} />
        </Modal>
      )}
    </div>
  );
}

export default App;
