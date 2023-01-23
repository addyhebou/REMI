import React from 'react';
import { useState, useEffect } from 'react';
import '../Styles/Routine.scss';
import { getRoutine } from '../Services/getRoutine';

export default function Routine() {
  const isDay: boolean = true;
  const routine: string[] = isDay
    ? getRoutine('morning')
    : getRoutine('evening');
  let [num, setNum] = useState<number>(0);
  const [highlighted, setHighlighted] = useState<string>(routine[num]);

  useEffect(() => {
    setHighlighted(routine[num]);
  }, [num, routine]);

  return (
    <div className="Routine">
      <h1>Routine</h1>
      <div className="main">
        <div className="RoutineSideImage">
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
