import React from "react";
import { data } from "./data";

const ToDoList = () => {
  let [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
  };

  const addItem = () => {
    let newP = [
      ...people,
      {
        id: people.length + 1,
        name: document.getElementById("newItem").value,
      },
    ];
    setPeople(newP);
  };

  return (
    <div className="container">
      <h2>To-Do List</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Done</button>
          </div>
        );
      })}

      <div className="item">
        <input
          type="text"
          id="newItem"
          placeholder="New Task..."
          style={{
            padding: "0.50rem 0px",
            border: "0px",
            borderBottom: "1px solid grey",
          }}
        />
        <button onClick={() => addItem()}>Add Task</button>
      </div>

      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </div>
  );
};

export default ToDoList;
