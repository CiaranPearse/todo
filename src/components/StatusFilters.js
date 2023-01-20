import React from 'react';
import cx from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import { STATUS_FILTERS } from '../constants';

const StatusFilters = () => {
  const dispatch = useDispatch();
  const activeStatus = useSelector(state => state.statusFilter);

  return (
    <div className='status-filters'>
      {Object.keys(STATUS_FILTERS).map(filterKey => {
        const currentFilter = STATUS_FILTERS[filterKey];
        return (
          <span
            key={`status-filter-${currentFilter}`}
            className={cx(
              'filter',
              currentFilter === activeStatus && 'filter--active'
            )}
            onClick={() => {
              dispatch(setFilter(currentFilter));
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

export default StatusFilters;
