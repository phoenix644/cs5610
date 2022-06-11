import React from "react";

export default function Header({ app, onAddTaskClicked, showForm }) {
  return (
    <header className="headerContainer">
      <h1>Welcome to {app}</h1>
      <button onClick={onAddTaskClicked}>{showForm? "Close" :"Add Task"}</button>
    </header>
  );
}
