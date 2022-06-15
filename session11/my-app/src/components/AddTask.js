import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title: title, date: date };
    // console.log("submitted ", newTask);
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw Error("POST request failed");
      }
      const data = await response.json();
      console.log(data)
      navigate(`/tasks/${data.insertedId}`);

    } catch (err) {
      console.log(err);
    }
    setTitle("");
    setDate("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          required
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
}
