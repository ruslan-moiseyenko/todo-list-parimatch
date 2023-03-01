import React, { useState, useRef } from "react";

export function InputForm({ addHandler }: any) {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [titleInputIsEmpty, setTitleInputIsEmpty] = useState(false);
  const [descriptionInputIsEmpty, setDescriptonInputIsEmpty] = useState(false);
  const inputTitleRef = useRef<HTMLInputElement>(null);
  const inputDescriptionRef = useRef<HTMLInputElement>(null);

  const onAddButtonClick = () => {
    if (
      inputTitleRef.current !== null &&
      inputDescriptionRef.current !== null
    ) {
      if (!inputTitleRef.current.value) {
        inputTitleRef.current.classList.add("fail");
        setTitleInputIsEmpty(true);
        return;
      } else if (!inputDescriptionRef.current.value) {
        inputDescriptionRef.current.classList.add("fail");
        setDescriptonInputIsEmpty(true);
        return;
      }
    }

    addHandler(titleInput, descriptionInput);
    setTitleInputIsEmpty(false);
    setDescriptonInputIsEmpty(false);
    inputTitleRef.current?.classList.remove("fail");
    inputDescriptionRef.current?.classList.remove("fail");
  };

  return (
    <section className="inputArea">
      <label>
        Title:
        <input
          ref={inputTitleRef}
          type="text"
          id="title"
          placeholder="Enter title"
          value={titleInput}
          onChange={(event) => setTitleInput(event.currentTarget.value)}
        />
        {titleInputIsEmpty && <p className="error">This field is empty</p>}
      </label>
      <label>
        Descripton:
        <input
          ref={inputDescriptionRef}
          value={descriptionInput}
          onChange={(event) => setDescriptionInput(event.currentTarget.value)}
          type="text"
          id="description"
          placeholder="Enter description"
        />
        {descriptionInputIsEmpty && (
          <p className="error">This field is empty</p>
        )}
      </label>

      <button id="createButton" onClick={onAddButtonClick}>
        Create
      </button>
    </section>
  );
}
