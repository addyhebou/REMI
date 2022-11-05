import React from 'react';
import { useState, useEffect } from 'react';
import '../Styles/Routine.scss';
import NavbarIcons from '../Components/NavbarIcons';
const lib = require('../Services/getRoutine');

export default function Routine() {
  const isDay = true;
  const routine = isDay ? lib.getRoutine('morning') : lib.getRoutine('evening');
  let [num, setNum] = useState(0);
  const [highlighted, setHighlighted] = useState(routine[num]);

  useEffect(() => {
    setHighlighted(routine[num]);
  }, [num, routine]);

  return (
    <div>
      <NavbarIcons />
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
            {routine.map((step, index) => {
              return highlighted === step ? (
                <li
                  className="routineStep"
                  style={{ transform: 'scale(1.25)', margin: '2vh 0vw' }}
                >
                  {step}
                </li>
              ) : (
                <li
                  className="routineStep"
                  onClick={() => {
                    setNum(index);
                  }}
                >
                  {step}
                </li>
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
