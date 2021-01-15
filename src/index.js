import React from "react";
import ReactDOM from "react-dom";
import MyToDoList from "./ToDo";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MyToDoList />
  </React.StrictMode>,
  rootElement
);
