import { useState } from 'react';
import { Todo } from '../types/todo';
import { Priority } from '../types/priority';
import { Filter, SortBy } from '../types/filter';

const generateId = () => Date.now().toString();

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [sortBy, setSortBy] = useState<SortBy>('date');

  const addTodo = (text: string, priority: Priority) => {
    if (!text.trim()) return;
    setTodos(prev => [
      ...prev,
      {
        id: generateId(),
        text: text.trim(),
        completed: false,
        priority,
        createdAt: Date.now(),
      },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const updateText = (id: string, newText: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortBy === 'date') {
      return b.createdAt - a.createdAt;
    }
    if (sortBy === 'priority') {
      const priorityOrder = {
        [Priority.High]: 3,
        [Priority.Medium]: 2,
        [Priority.Low]: 1,
      };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0;
  });

  return {
    todos: sortedTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateText,
    filter,
    setFilter,
    sortBy,
    setSortBy,
  };
};
