import { STATUS_FILTERS } from '../constants';

export const getTodosState = storeState => storeState.todos;

export const getTodoList = storeState =>
  getTodosState(storeState) ? getTodosState(storeState).allIds : [];

export const getTodoById = (storeState, id) =>
  getTodosState(storeState)
    ? { ...getTodosState(storeState).byIds[id], id }
    : {};

export const getTodos = storeState =>
  getTodoList(storeState).map(id => getTodoById(storeState, id));

export const getTodosByStatusFilter = (storeState, statusFilter) => {
  const allTodos = getTodos(storeState);
  switch (statusFilter) {
    case STATUS_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case STATUS_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case STATUS_FILTERS.ALL:
    default:
      return allTodos;
  }
};
