export default function TaskTable({ tasks, onEdit, onDelete }) {
  return (
    <table className="min-w-full table-auto border">
      <thead>
        <tr>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id} className="border-t">
            <td className="px-4 py-2">{task.title}</td>
            <td className="px-4 py-2">{task.description}</td>
            <td className="px-4 py-2">
              <button onClick={() => onEdit(task.id)} className= "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Edit</button>
              <button onClick={() => onDelete(task.id)} className="ml-2 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
