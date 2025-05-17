import { useState } from 'react';

export default function useTaskForm(initialData) {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');

  const isValid = () => title.trim() !== '';

  return {
    title,
    description,
    setTitle,
    setDescription,
    isValid,
  };
}

