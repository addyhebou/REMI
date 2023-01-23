import React, { useState } from 'react';
import GoalSetFunc, { TitleCard } from './GoalSetFunc';
import { categories } from '../Constants/categories';
import '../Styles/GoalArray.scss';
import { goalTable } from '../Constants/goalTable';

export default function GoalArray() {
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  return (
    <div className="goalArray">
      <h1 onClick={() => setSelectedGoal('')}>
        2023 <strong>Goals</strong>
      </h1>
      {selectedGoal.length === 0 ? (
        <div className="goalRow">
          {categories.map((c, i) => {
            const orientation = i % 2 === 0 ? 'column' : 'column-reverse';
            return (
              <GoalSetFunc
                category={c}
                orientation={orientation}
                setSelectedGoal={setSelectedGoal}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <TitleCard
            category={selectedGoal}
            setSelectedGoal={setSelectedGoal}
          />
          <div>
            <div className="ObjectiveContainer">
              <img className="GoalCartoon" alt="image" />
              <div className="KeyObjectives">
                <h2>Key Objectives</h2>
                <ul>
                  {Object.keys((goalTable as any)[selectedGoal].goals.OKRs).map(
                    (goal: string) => {
                      const steps = (goalTable as any)[selectedGoal].goals.OKRs[
                        goal
                      ];
                      return (
                        <>
                          <li>{goal}</li>
                          <ul>
                            {steps.map((step: string) => (
                              <li>{step}</li>
                            ))}
                          </ul>
                        </>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="goalRow">
            {categories.map(
              (c) =>
                c !== selectedGoal && (
                  <TitleCard category={c} setSelectedGoal={setSelectedGoal} />
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
