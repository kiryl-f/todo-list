import React from 'react';
import styles from './SortButtons.module.scss';
import { SORT_OPTIONS, SortBy } from '../../../types/filter';

interface Props {
  sortBy: SortBy;
  setSortBy: (value: SortBy) => void;
}

const SortButtons: React.FC<Props> = ({ sortBy, setSortBy }) => {
  return (
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
  );
};

export default React.memo(SortButtons);
