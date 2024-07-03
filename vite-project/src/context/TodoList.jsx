import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, dispatch }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} dispatch={dispatch} />
      ))}
    </ul>
  );
}

export default TodoList;
