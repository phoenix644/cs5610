import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Task({ task, onDelete }) {
    // function clicked()
    // {
    //     onDelete(task.id)
    // }
  return (
    <li>
      <div className="taskContainer">
        <div className="nameIconContainer">
         <Link to={`${task._id}`}> <p>{task.title}</p> </Link>
          <FaTimes onClick={() => {onDelete(task._id)}} />
        </div>
        <p>{task.date}</p>
      </div>
    </li>
  );
}
