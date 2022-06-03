import { useEffect, useState , useRef} from 'react'
import { useParams, useLocation } from "react-router-dom";

export default function TaskDetails() {
  const taskRef = useRef (null);

  const { taskId } = useParams();
  const [user, setUser] = useState({});
  let location = useLocation();
  useEffect(() => {
    async function fetchTask() {
      // const data = await fetch(`http://localhost:5000/users?task=${taskId}`)
      // const users = await data.json();
      // console.log(users);
      // setUser(users[0]);
      console.log(taskRef)

      taskRef.current.focus();
    }
    fetchTask();
 
  }, []);;

  return (
    
      <h1 tabIndex="-1" ref={taskRef}>{user? user.name: 'No one'} is responsible for task {taskId} </h1>
    
  )
}
