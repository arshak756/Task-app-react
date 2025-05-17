import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTask from './pages/CreateTask';
import EditTask from './pages/EditTask';

export default function App() {
  return (
    <Router>
      <div className="p-4 max-w-7xl mx-auto max-h-7x1  mt-20 border bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/edit/:id" element={<EditTask />} />
        </Routes>
      </div>
    </Router>
  );
}

