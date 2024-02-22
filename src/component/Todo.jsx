import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import EditTodo from './EditTodoForm';


export const Todo = ({task, toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick ={() => toggleComplete(task.id)} className={`${task.completed ? 'completed':""}`}>{task.task}</p>
      <div>
      <FontAwesomeIcon icon={faEdit}  onClick={() =>  editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTodo(task.id)}/>
      </div>
      </div>
  )
}

export default Todo