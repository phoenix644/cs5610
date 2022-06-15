import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const appName = "My App";
  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  };
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
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
        <Route
          path="/profile"
          element={<ProtectedRoute Component={Profile} />}
        ></Route>
        <Route path="*" element={<p>Nothing found here!</p>}></Route>
      </Routes>
    </div>
  );
}

export default App;
