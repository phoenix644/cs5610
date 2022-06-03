import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, BrowserRouter } from 'react-router-dom'
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import AddTask from "./components/AddTask";
import { useAuth0 } from '@auth0/auth0-react'
import TaskDetails from "./components/TaskDetails";

 import Loading from "./components/Loading";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import NavigationWithBS from "./components/NavigationWithBS";

function App() {
  const { getAccessTokenSilently, isLoading } = useAuth0();
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  // const navigate = useNavigate();
  useEffect(() => {
    async function fetchTasks() {
      try {
        const data = await fetch("http://localhost:5000/tasks")
        console.log(data.status)
        if (data.status === 200) {
          const jsonData = await data.json();
          setTasks(jsonData)
        }
        console.log("in use effect ", tasks)
      } catch (err) { console.log(err) }
    }

    fetchTasks();

  }, [tasks.length])

  //show form
  const onAddClick = () => {
    setShowForm(!showForm);
  };

  //delete task
  const deleteTask = async (id) => {
    try {
      const token = await getAccessTokenSilently();
      console.log('App ',token)

      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
    }
    catch (err) {
      console.log(err)
    }
    setTasks(
      tasks.filter((task) => {
        return task._id !== id;
      })
    );

  };

  //  add task


  const name = "My App";
  return (

    <div className="container">
      
      {isLoading ? <Loading /> :
        <>

             <NavigationWithBS />
           
            {/* <AuthNav /> */}
           <Routes>
            <Route path="/profile" element={<ProtectedRoute component={Profile} />} />


            <Route path="/" element={
              <>
                <Header name={name} onAddClick={onAddClick} showForm={showForm} />
                {showForm && <AddTask />}
              </>} />
            <Route path="/tasks" element={
              tasks.length > 0 ? (
                <ul>
                  <TasksList tasks={tasks} onDelete={deleteTask} />
                </ul>
              ) : (
                <p>No tasks to show</p>
              )
            } >
            </Route>
            <Route path="/tasks/:taskId" element={<TaskDetails />} />

            <Route path="*" element={<p>Nothing here!</p>}>

            </Route>
          </Routes>
        </>}
    </div>
  );
}

export default App;
