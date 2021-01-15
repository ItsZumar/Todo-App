import React, { useState } from "react";
import "./ToDo.css";

function MyToDoList() {
  const [input, setInput] = useState("");
  const [display, setDisplay] = useState("You have not save any todos.");
  const [toDoList, setToDoList] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...toDoList, { text }];
    setToDoList(newTodos);
  };

  const handleDel = (index) => {
    const newTodos = [...toDoList];
    newTodos.splice(index, 1);
    setToDoList(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    addTodo(input);
    setInput("");
  };

  return (
    <div className="container">
      <div className="todo-list">
        <h1 className="title">TODO APP</h1>
        <input
          placeholder="Enter Task"
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn" onClick={handleSubmit}>
          Add
        </button>

        {/* (toDoList === [])? <h1>{display}</h1> */}

        {toDoList.length === 0 ? (
          <h3 className="display-msg">{display}</h3>
        ) : (
          toDoList.map((todo, index) => (
            <div className="card">
              <div className="btn-div">
                <p className="paragragh">
                  {index + 1}:{todo.text}
                </p>
                <button className="del" onClick={handleDel}>
                  X
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MyToDoList;
