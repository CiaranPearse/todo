import { SET_FILTER } from '../actionTypes';
import { STATUS_FILTERS } from '../../constants';

const initialState = STATUS_FILTERS.ALL;

const statusFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default statusFilter;
