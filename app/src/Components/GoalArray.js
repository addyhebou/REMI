import React from 'react';
import GoalSetFunc from './GoalSetFunc';
const lib = require('../Constants/goalTable');

export default function GoalArray() {
  const categories = lib.categories;
  return (
    <div className="goalArray">
      <h1>
        2022 <strong>Goals</strong>
      </h1>
      {categories.map((c) => {
        return <GoalSetFunc category={c} />;
      })}
    </div>
  );
}
