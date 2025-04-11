import React from 'react';
import styles from './TodoFilters.module.scss';
import { Filter, SortBy, FILTER_OPTIONS, SORT_OPTIONS } from '../../types/filter';

interface Props {
  filter: Filter;
  sortBy: SortBy;
  setFilter: (value: Filter) => void;
  setSortBy: (value: SortBy) => void;
}

const TodoFilters: React.FC<Props> = React.memo(({ filter, sortBy, setFilter, setSortBy }) => {
  return (
    <div className={styles.filters}>
      <div className={styles.group}>
        <span>Filter:</span>
        {FILTER_OPTIONS.map(option => (
          <button
            key={option}
            onClick={() => setFilter(option)}
            className={filter === option ? styles.active : styles.inactive}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.group}>
        <span>Sort by:</span>
        {SORT_OPTIONS.map(option => (
          <button
            key={option}
            onClick={() => setSortBy(option)}
            className={sortBy === option ? styles.active : styles.inactive}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
});

export default TodoFilters;
