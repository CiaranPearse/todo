import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';
import { getTodosByStatusFilter } from '../redux/selectors';

const TodoList = () => {
  const statusFilter = useSelector(state => state.statusFilter);
  const todos = useSelector(state =>
    getTodosByStatusFilter(state, statusFilter)
  )

  const incompleteTodos = todos.filter(todo => todo.completed === false);
  const incompleteCount = incompleteTodos.length;
  return (
    <>
    {incompleteCount > 0 && <p>{incompleteCount} remaining Todos</p>}
    <ul className='todo-list'>
      {todos && todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        }
    </ul>
    </>
  );
};

export default TodoList;
