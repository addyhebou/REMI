import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../GoalSetFunc.scss';
const lib = require('../Data/goalTable');

export default function GoalSetFunc(props) {
  const goalTable = lib.goalTable;
  const [category, setCategory] = useState(props.category);
  const getGoals = () => {
    return goalTable[category][0];
  };

  const getColor = () => {
    return goalTable[category][1];
  };

  const getRandomYPosition = () => {
    Math.floor(Math.random() * 10 + 1);
  };

  const [color, setColor] = useState(getColor(category));
  const [tasks, setTasks] = useState(getGoals());
  const [randomYPosition, setRandomYPosition] = useState(getRandomYPosition());

  return (
    <div className='floater'>
      <Link
        to='/goal'
        style={{
          textDecoration: 'none',
          color: 'black',
        }}
        to={{
          pathname: '/goal',
          state: {
            title: category,
          },
        }}
      >
        <h2
          className='Title'
          style={{
            backgroundColor: color,
            transform: 'translate(0, ' + randomYPosition + 'px)',
          }}
        >
          {category}
        </h2>
      </Link>
      {tasks.map((task) => {
        return <h3 className='task'>{task}</h3>;
      })}
    </div>
  );
}
