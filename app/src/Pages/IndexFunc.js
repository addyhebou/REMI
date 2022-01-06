import React from 'react';
import Navbar from '../Components/NavbarIcons';
import GoalSetFunc from '../Components/GoalSetFunc';
import '../IndexFunc.scss';
const lib = require('../Data/goalTable');

export default function IndexFunc() {
  const categories = lib.categories;
  return (
    <div>
      <Navbar />
      <div className="GoalArray">
        {categories.map((c) => {
          return <GoalSetFunc category={c} />;
        })}
      </div>
    </div>
  );
}
