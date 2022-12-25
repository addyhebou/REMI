import React from 'react';
import GoalSetFunc from './GoalSetFunc';
import { categories } from '../Constants/categories';
import '../Styles/GoalArray.scss';

export default function GoalArray() {
  return (
    <div className="goalArray">
      <h1>
        2023 <strong>Goals</strong>
      </h1>
      <div className="goalRow">
        {categories.map((c, i) => {
          const orientation = i % 2 === 0 ? 'column' : 'column-reverse';
          return <GoalSetFunc category={c} orientation={orientation} />;
        })}
      </div>
    </div>
  );
}
