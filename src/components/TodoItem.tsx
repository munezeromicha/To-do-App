import { Todo } from '@/types/todo';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/24/outline';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between transition-all hover:shadow-md">
      <div className="flex items-center space-x-4">
        <button
          aria-label={`Mark todo ${todo.completed ? 'incomplete' : 'complete'}`}
          onClick={() => onToggle(todo.id)}
          className={`rounded-full p-1 ${
            todo.completed
              ? 'text-green-500 hover:text-green-600'
              : 'text-gray-400 hover:text-gray-500'
          }`}
        >
          <CheckCircleIcon className="h-6 w-6" />
        </button>
        <div>
          <h3
            className={`text-lg font-medium ${
              todo.completed ? 'text-gray-400 line-through' : 'text-gray-900'
            }`}
          >
            {todo.title}
          </h3>
          <p className="text-gray-500 text-sm">{todo.description}</p>
        </div>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-400 hover:text-red-500 transition-colors"
        aria-label="Delete todo"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
} 