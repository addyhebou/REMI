import React from 'react';
import { useEffect, useState } from 'react';

export default function ToDoPreview() {
  useEffect(() => {
    async function getToDoTasks() {
      const url = 'https://ancient-coast-78698.herokuapp.com/';
      const response = await fetch(url);
      if (!response.ok) throw new Error('HTTP Error');
      const res = await response.json();
      setTasks(res);
    }
    getToDoTasks();
  }, []);
  const [tasks, setTasks] = useState([]);
  return (
    <ul>
      {tasks.map(
        (task) => task['completed'] === false && <li>{task['name']}</li>
      )}
    </ul>
  );
}
