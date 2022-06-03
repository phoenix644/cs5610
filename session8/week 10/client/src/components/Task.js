import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Task({ task, onDelete }) {
    return (
        <li>
            <div className="task">
                <div>
                   <Link to ={`/tasks/${task._id}`}> <p>  {task.text}</p></Link>
                    <FaTimes tabIndex="0" onClick={() => {onDelete(task._id)}}onKeyDown={(e)=> {if(e.key === 'Enter') {onDelete(task._id);}}}
                     />
                </div>
                <p>  {task.date}</p>
            </div>
        </li>
    )
}
