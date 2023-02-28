import React, { useState } from "react";

export function InputForm({ addHandler }: any) {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const onAddButtonClick = () => {
    addHandler(titleInput, descriptionInput);
  };

  return (
    <section className="inputArea">
      <label>
        Title:
        <input
          type="text"
          id="title"
          placeholder="Enter title"
          value={titleInput}
          onChange={(event) => setTitleInput(event.currentTarget.value)}
        />
      </label>
      <label>
        Descripton:
        <input
          onChange={(event) => setDescriptionInput(event.currentTarget.value)}
          type="text"
          id="description"
          placeholder="Enter description"
        />
      </label>

      <button id="createButton" onClick={onAddButtonClick}>
        Create
      </button>
    </section>
  );
}
