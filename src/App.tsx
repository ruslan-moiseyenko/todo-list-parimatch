import React, { useState, useEffect } from "react";
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
  const [fullSelectedTodoInfo, setSelectedTodoInfo] = useState<TodoType>({
    id: 0,
    title: "",
    description: "",
    checked: false
  });
  const [modal, setModal] = useState(false);

  //prepare information to draw selected todo item
  useEffect(() => {
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].id === selectedTodo) {
        setSelectedTodoInfo({
          id: todo[i].id,
          title: todo[i].title,
          description: todo[i].description,
          checked: todo[i].checked
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTodo]);

  //add new item to out todo list
  const addHandler = (titleInput: string, descriptionInput: string) => {
    setTodo([
      ...todo,
      { id, title: titleInput, description: descriptionInput, checked: false }
    ]);
    setId((prevID) => prevID + 1);
  };

  //toggle CHECK button on a todo item
  const toggleTodoChecked = (id: number) => {
    setTodo((prevTodo) => {
      for (let i = 0; i < prevTodo.length; i++) {
        if (prevTodo[i].id === id) {
          console.log("found");
          prevTodo[i].checked = !prevTodo[i].checked;
          console.log(prevTodo[i].checked);
        }
      }
      console.log(prevTodo);
      return prevTodo;
    });
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
      <TodoTable
        todo={todo}
        checkTodo={toggleTodoChecked}
        onClick={onTodoClick}
      />
      {modal && (
        <Modal onClose={toggleModal}>
          <ModalContent
            info={fullSelectedTodoInfo}
            checkTodo={toggleTodoChecked}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
