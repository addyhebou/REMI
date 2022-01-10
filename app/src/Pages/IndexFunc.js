import React from 'react';
import Navbar from '../Components/NavbarIcons';
import '../IndexFunc.scss';
import Welcome from '../Components/Welcome';
import GoalArray from '../Components/GoalArray';

export default function IndexFunc() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Welcome />
        <GoalArray />
      </div>
    </div>
  );
}
