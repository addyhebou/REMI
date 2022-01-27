import React from 'react';
import NavbarIcons from '../Components/NavbarIcons';
import '../Styles/IndexFunc.scss';
import Welcome from '../Components/Welcome';
import GoalArray from '../Components/GoalArray';

export default function IndexFunc() {
  return (
    <div>
      <NavbarIcons />
      <div className="main">
        <Welcome />
        <GoalArray />
      </div>
    </div>
  );
}
