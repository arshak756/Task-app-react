import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { loadTasks, saveTasks } from '../utils/taskStorage';

export default function CreateTask() {
  const navigate = useNavigate();

  const handleSubmit = (task) => {
    const tasks = loadTasks();
    const newTask = { id: Date.now(), ...task };
    tasks.push(newTask);
    saveTasks(tasks);
    navigate('/');
  };

  return (
    <div>
      <h2 className="text-xl mb-4">Create Task</h2>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}
