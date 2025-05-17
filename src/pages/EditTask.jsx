import { useNavigate, useParams } from 'react-router-dom';
import { loadTasks, saveTasks } from '../utils/taskStorage';
import TaskForm from '../components/TaskForm';

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tasks = loadTasks();
  const task = tasks.find(t => t.id === Number(id));

  const handleSubmit = (updatedTask) => {
    const updatedTasks = tasks.map(t =>
      t.id === Number(id) ? { ...t, ...updatedTask } : t
    );
    saveTasks(updatedTasks);
    navigate('/');
  };

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h2 className="text-xl mb-4">Edit Task</h2>
      <TaskForm onSubmit={handleSubmit} initialData={task} />
    </div>
  );
}
