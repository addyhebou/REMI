import React from 'react';
import { useState, useEffect, Link } from 'react';

export default function GoalSetFunc(props) {
  const goalTable = {
    'Tech CEO': [['CS Degree', 'SDE Job'], '#AFD8EF'],
    'Critically Acclaimed': [['CS Degree', 'SDE Job'], '#F59393'],
    'Music Creator': [['CS Degree', 'SDE Job'], '#EBBD87'],
    'Financial Freedom': [['CS Degree', 'SDE Job'], '#C0EFAF'],
    Personal: [['CS Degree', 'SDE Job'], '#D1A9D4'],
  };

  const [category, setCategory] = useState(props.category);
  console.log(category);
  const getGoals = () => {
    return goalTable[category][0];
  };

  const getColor = () => {
    return goalTable[category][1];
  };

  const getRandomYPosition = () => {
    Math.floor(Math.random() * 10 + 1);
  };

  const [color, setColor] = useState(getColor(props.category));
  const [tasks, setTasks] = useState(getGoals());
  const [randomYPosition, setRandomYPosition] = useState(getRandomYPosition());

  return (
    <div className='floater'>
      {tasks.map((task) => {
        return <h2 className='task'>{task}</h2>;
      })}
      {/* <Link to='/goal'> */}
      {/* <h2 style={{ backgroundColor: { color } }}>{category}</h2> */}
      {/* </Link> */}
    </div>
  );
}
