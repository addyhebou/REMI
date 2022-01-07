import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import StepFunc from '../Components/StepFunc';
import '../GoalPageFunc.scss';
const lib = require('../Data/goalTable');

export default function GoalPageFunc() {
  const location = useLocation();
  const { title } = location.state;
  const tasks = lib.goalTable[title][0];
  const [displaySteps, setDisplaySteps] = useState(true);
  const [selected, setSelected] = useState('');
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="goalPage">
      <h1>{title}</h1>
      <button
        onClick={() => {
          setShowAll(!showAll);
        }}
      >
        {showAll ? 'Showing for all' : 'Showing only for selected task'}
      </button>
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
              className="Task Task_Mobile"
            >
              {task}
            </h2>
            {(showAll || task === selected) && displaySteps && (
              <div>
                <p className="SMARTGoal">{smartGoal}</p>
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
