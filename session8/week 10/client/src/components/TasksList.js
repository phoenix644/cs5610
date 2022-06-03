import React, { useRef } from 'react'
import Task from './Task'
 
export default function TasksList({ tasks, onDelete }) {
  return (
    <>
      {tasks.map((task) => <Task key={task._id} task={task} onDelete={onDelete} />)}
    </>
  )
}
