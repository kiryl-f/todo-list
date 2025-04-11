import React from 'react';
import styles from './FilterButtons.module.scss';
import { Filter, FILTER_OPTIONS } from '../../../types/filter';


interface Props {
  filter: Filter;
  setFilter: (value: Filter) => void;
}

const FilterButtons: React.FC<Props> = ({ filter, setFilter }) => {
  return (
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
  );
};

export default React.memo(FilterButtons);
