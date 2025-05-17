import useTaskForm from '../hooks/useTaskForm';

export default function TaskForm({ onSubmit, initialData = {} }) {
  const { title, description, setTitle, setDescription, isValid } = useTaskForm(initialData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid()) return alert('Title is required');
    onSubmit({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Save Task
      </button>
    </form>
  );
}
