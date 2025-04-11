import React, { useState } from 'react';
import styles from './TodoForm.module.scss';
import { Priority } from '../../types/priority';

const priorities = Object.values(Priority);

interface Props {
  onAdd: (text: string, priority: Priority) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>(Priority.Medium);


  const handleAdd = () => {
    onAdd(text, priority);
    setText('');
    setPriority(Priority.Medium);
  };

  return (
    <div className={styles.form}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New task..."
        className={styles.input}
      />
      <select value={priority} onChange={e => setPriority(e.target.value as Priority)} className={styles.select}>
        {priorities.map(p => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
      <button onClick={handleAdd} className={styles.button}>Add</button>
    </div>
  );
};

export default TodoForm;
