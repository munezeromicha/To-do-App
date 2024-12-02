'use client';

import { useState, useEffect } from 'react';
import { Todo } from '@/types/todo';
import api from '@/lib/axios';
import TodoItem from './TodoItem';
import { toast } from 'react-hot-toast';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await api.get('/todos/');
      setTodos(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to fetch todos');
    } finally {
      setLoading(false);
    }
  };

  const toggleTodo = async (id: number) => {
    try {
      const todo = todos.find((t) => t.id === id);
      await api.patch(`/todos/${id}/`, {
        completed: !todo?.completed,
      });
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
      toast.success('Todo updated successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to update todo');
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await api.delete(`/todos/${id}/`);
      setTodos(todos.filter((todo) => todo.id !== id));
      toast.success('Todo deleted successfully');
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete todo');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet. Add one above!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))
      )}
    </div>
  );
} 