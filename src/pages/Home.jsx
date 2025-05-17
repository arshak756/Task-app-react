import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadTasks, saveTasks } from '../utils/taskStorage';
import TaskTable from '../components/TaskTable';
import Pagination from '../components/Pagination';

export default function Home() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    saveTasks(updated);
  };

  const handleEdit = (id) => navigate(`/edit/${id}`);

  const filtered = tasks.filter(t => t.title.toLowerCase().includes(query.toLowerCase()));
  const totalPages = Math.ceil(filtered.length / tasksPerPage);
  const paginated = filtered.slice((currentPage - 1) * tasksPerPage, currentPage * tasksPerPage);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="p-2 border rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={() => navigate('/create')} className="p-2 bg-green-500 text-white rounded">
          + New Task
        </button>
      </div>
      <TaskTable tasks={paginated} onEdit={handleEdit} onDelete={handleDelete} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
