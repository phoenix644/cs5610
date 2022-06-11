import React, { useState, useEffect } from "react";
import Task from "./Task";

export default function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:5000/tasks");
        if (!response.ok) {
          throw Error("Fetch failed");
        }
        const data = await response.json();
        setTasks(data);
        setIsLoading(false);
      } catch (err) {
        console.log("catch ", err);
      }
    }
    fetchData();
  }, []);

  async function deleteClicked(deletedId) {
    console.log("clicked", deletedId);
    try {
      const response = await fetch(`http://localhost:5000/tasks/${deletedId}`, {
        method: "DELETE",
      });
      console.log(response);

    } catch (err) {
      console.log(err);
    }
    const updatedTasks = tasks.filter((item) => item.id !== deletedId);
    setTasks(updatedTasks);
  }
  return tasks.length > 0 ? (
    <>
      {tasks.map((item) => (
        <Task key={item.id} task={item} onDelete={deleteClicked} />
      ))}
    </>
  ) : (
    <li>No Tasks Left</li>
  );
}
