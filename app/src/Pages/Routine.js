import React from 'react';
import { useState, useEffect } from 'react';
import '../Routine.scss';
const lib = require('../Functions/getRoutine');

export default function Routine() {
  const [isDay, setIsDay] = useState(true);
  const routine = isDay ? lib.getRoutine('morning') : lib.getRoutine('evening');
  let [num, setNum] = useState(0);
  const [steps, setSteps] = useState([]);
  const [highlighted, setHighlighted] = useState(routine[num]);

  useEffect(() => {
    setHighlighted(routine[num]);
  });

  return (
    <div>
      <h1>Routine</h1>
      <div className="main">
        <div>
          <caption>Where image will be</caption>
          <h2>
            <strong>{highlighted}</strong>
          </h2>
        </div>
        <div>
          <ul className="routineContainer">
            {routine.map((step) => {
              return highlighted === step ? (
                <li
                  className="routineStep"
                  style={{ transform: 'scale(1.25)', margin: '2vh 0vw' }}
                >
                  {step}
                </li>
              ) : (
                <li className="routineStep">{step}</li>
              );
            })}
          </ul>
          <button
            onClick={() => {
              if (num > 0) setNum(num - 1);
            }}
          >
            Go back
          </button>
          <button
            onClick={() => {
              if (num < routine.length - 1) setNum(num + 1);
            }}
          >
            Go forward
          </button>
        </div>
      </div>
    </div>
  );
}
