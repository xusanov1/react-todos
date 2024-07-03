import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdRemoveCircleOutline } from "react-icons/md";



function TodoItem({ todo, index, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const toggleTodo = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  const removeTodo = () => {
    dispatch({ type: 'REMOVE_TODO', payload: index });
  };

  const saveEdit = () => {
    dispatch({ type: 'EDIT_TODO', payload: { index, newTitle: editTitle } });
    setIsEditing(false);
  };

  return (
    <li className='list-li' style={{ backgroundColor: todo.completed ? 'lightgreen' : 'white', textDecoration : todo.completed ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input className='edit-input' type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
          <button className='save-btn' onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
        <div className="title-comp">
          <input className='checkbox' type="checkbox" checked={todo.completed} onChange={toggleTodo}/>
          <h2>{todo.title}</h2> <br /> <br /> <br />
          <p className='date-p'>{new Date(todo.time).toLocaleString()}</p>
        </div>
        <div className="edit-rem">
          <button className='edit-btn' onClick={() => setIsEditing(true)}><FaRegEdit /></button>
          <button className='remove-btn' onClick={removeTodo}><MdRemoveCircleOutline /></button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
