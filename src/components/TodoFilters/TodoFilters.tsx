import React from 'react';
import styles from './TodoFilters.module.scss';
import { Filter, SortBy } from '../../types/filter';
import FilterButtons from './FilterButtons/FilterButtons';
import SortButtons from './SortButtons/SortButtons';

interface Props {
  filter: Filter;
  sortBy: SortBy;
  setFilter: (value: Filter) => void;
  setSortBy: (value: SortBy) => void;
}

const TodoFilters: React.FC<Props> = ({ filter, sortBy, setFilter, setSortBy }) => {
  return (
    <div className={styles.filters}>
      <FilterButtons filter={filter} setFilter={setFilter} />
      <SortButtons sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
};

export default React.memo(TodoFilters);
