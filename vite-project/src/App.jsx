import React, { useReducer, useState } from 'react';
import { useEffect } from 'react';
import TodoList from './context/TodoList';
import { todoReducer, initialState, todosLenght } from './context/UseTodoReducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(new Date());
  const [todosLength, setTodosLength] = useState(0);


  
  const addTodo = () => {
    if (title) {
      dispatch({ type: 'ADD_TODO', payload: { title, time, completed: false } });
      setTitle('');
      setTime(new Date()); 
    }
  };

  useEffect(() => {
    setTodosLength(state.todos.length);
  }, [state.todos]);



  return (
    <div className="App">
      <div className="intro">
    <h1 className='app-title'>TODO List</h1>
      <input className='app-input' type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button className='app-btn' onClick={addTodo}>Add </button>
      </div>
      <div className="todo-list">
      </div>
      <h3>Total Todos: {todosLenght}</h3>
    <TodoList todos={state.todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
