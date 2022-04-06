import React from 'react';
import { useEffect, useState } from 'react';

export default function ToDoPreview() {
  useEffect(async () => {
    const url = 'https://ancient-coast-78698.herokuapp.com/';
    const response = await fetch(url);
    if (!response.ok) throw new Error('HTTP Error');
    const res = await response.json();
    setTasks(res);
  }, []);
  const [tasks, setTasks] = useState([]);
  return (
    <ul>
      {tasks.map((task) => {
        if (task['completed'] === false) return <li>{task['name']}</li>;
      })}
    </ul>
  );
}
