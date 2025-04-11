import React, { useState } from 'react';

import styles from './TodoItem.module.scss';
import { Todo } from '../../types/todo';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

const TodoItem: React.FC<Props> = React.memo(({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleUpdate = () => {
    if (editedText.trim() !== todo.text) {
        onUpdate(todo.id, editedText.trim());
    }
    setIsEditing(false);
  };

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <input
          value={editedText}
          onChange={e => setEditedText(e.target.value)}
          onBlur={handleUpdate}
          onKeyDown={e => e.key === 'Enter' && handleUpdate()}
          className={styles.editInput}
        />
      ) : (
        <span
          onDoubleClick={() => setIsEditing(true)}
          className={`${styles.text} ${todo.completed ? styles.completed : ''}`}
        >
          {todo.text} <small className={styles.priority}>[{todo.priority}]</small>
        </span>
      )}
      
      <button onClick={() => onDelete(todo.id)} className={styles.delete}>
        delete
      </button>
    </li>
  );
});

export default TodoItem;
