import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";

function App() {
  const appName = "My App";
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                app={appName}
                onAddTaskClicked={toggleShowForm}
                showForm={showForm}
              />
              {showForm && <AddTask />}
            </>
          }
        ></Route>
        <Route
          path="/tasks"
          element={
            <ul>
              <TasksList />
            </ul>
          }
        ></Route>
        <Route path="/tasks/:taskId" element={<TaskDetails />}></Route>
        <Route path="*" element={<p>Nothing found here!</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
