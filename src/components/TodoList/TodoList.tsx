import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.scss';
import { Todo } from '../../types/todo';

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, text: string) => void;
}

const TodoList: React.FC<Props> = React.memo(({ todos, onToggle, onDelete, onUpdate }) => {
  if (todos.length === 0) {
    return <p className={styles.empty}>No tasks to show</p>;
  }

  return (
    <ul className={styles.list}>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
});

export default TodoList;
