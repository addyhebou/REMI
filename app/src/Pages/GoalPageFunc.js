import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import StepFunc from '../Components/StepFunc';
const lib = require('../Data/goalTable');

export default function GoalPageFunc() {
  const location = useLocation();
  const { title } = location.state;
  const tasks = lib.goalTable[title][0];
  const [displaySteps, setDisplaySteps] = useState(true);
  const [selected, setSelected] = useState('');

  return (
    <div>
      <h1>{title}</h1>
      {tasks.map((task) => {
        const smartGoal = lib.goalTable[title][2][task][0];
        const steps = lib.goalTable[title][2][task][1];
        return (
          <div>
            <h2
              onClick={(e) => {
                setDisplaySteps(!displaySteps);
                setSelected(e.target.innerHTML);
              }}
            >
              {task}
            </h2>
            {task === selected && displaySteps && (
              <div>
                <p>{smartGoal}</p>
                {steps.map((step) => {
                  return <StepFunc step={step} />;
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
