import React from 'react';
import styles from './TodoApp.module.scss';
import { useTodos } from '../../hooks/useTodos';
import TodoList from '../TodoList/TodoList';
import TodoFilters from '../TodoFilters/TodoFilters';
import TodoForm from '../TodoForm/TodoForm';

const TodoApp: React.FC = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateText,
    filter,
    setFilter,
    sortBy,
    setSortBy,
  } = useTodos();

  return (
    <div className={styles.container}>

      <h1>Todo List</h1>
      
      <TodoForm onAdd={addTodo} />
      
      <TodoFilters
        filter={filter}
        sortBy={sortBy}
        setFilter={setFilter}
        setSortBy={setSortBy}
      />
      
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onUpdate={updateText} 
      />
      
    </div>
  );
};

export default TodoApp;
