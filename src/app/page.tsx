import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          My Todo List
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </main>
  );
}