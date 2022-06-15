import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";

export default function TaskDetails() {
    const {taskId} = useParams();
    console.log(taskId)
    const [user, setUser] = useState([]);
    useEffect(() => {
        async function fetchUser() {
          try {
            const response = await fetch(`http://localhost:5000/users?task=${taskId}`);
            if (!response.ok) {
              throw Error("Fetch failed");
            }
            const user = await response.json();
         
            console.log(user)
          } catch (err) {
            console.log("catch ", err);
          }
        }
        // fetchUser();
      }, [taskId]);
    // console.log (params)
  return (
    <div>You are Vieweing Task {taskId} details</div>
  )
}
