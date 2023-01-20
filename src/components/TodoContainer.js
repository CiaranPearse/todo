import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import StatusFilters from './StatusFilters';
import '../base.css';



export const TodoContainer = () => {
  return (
    <div className='todo-app'>
      <h1>Your Todo List</h1>
      <AddTodo />
      <TodoList />
      <StatusFilters />
    </div>
  );
}

export default TodoContainer;
