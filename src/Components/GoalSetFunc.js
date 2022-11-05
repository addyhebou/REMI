import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/GoalSetFunc.scss';
const lib = require('../Constants/goalTable');

export default function GoalSetFunc(props) {
  const goalTable = lib.goalTable;
  const category = props.category;

  const getColor = () => {
    return goalTable[category][1];
  };

  const getRandomYPosition = () => {
    Math.floor(Math.random() * 10 + 1);
  };

  const color = getColor(category);
  const randomYPosition = getRandomYPosition();

  return (
    <div className="floater">
      <Link
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
          className="Title"
          style={{
            backgroundColor: color,
            transform: 'translate(0, ' + randomYPosition + 'px)',
          }}
        >
          {category}
        </h2>
      </Link>
    </div>
  );
}
