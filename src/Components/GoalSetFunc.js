import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/GoalSetFunc.scss';
import { goalTable } from '../Constants/goalTable';

export default function GoalSetFunc(props) {
  const category = props.category;
  const orientation = props.orientation;

  const getColor = () => goalTable[category][1];

  const getRandomYPosition = () => Math.floor(Math.random() * 10 + 1);

  const color = getColor(category);
  const randomYPosition = getRandomYPosition();

  return (
    <div className="GoalSet">
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
        <div style={{ display: 'flex', flexDirection: orientation }}>
          <h2
            className="Title"
            style={{
              backgroundColor: color,
              transform: 'translate(0, ' + randomYPosition + 'px)',
            }}
          >
            {category}
          </h2>
          <div>Image</div>
        </div>
      </Link>
    </div>
  );
}
