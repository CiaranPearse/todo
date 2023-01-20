import { combineReducers } from 'redux';
import statusFilter from './statusFilter';
import todos from './todos';

export default combineReducers({ todos, statusFilter });
