import React from 'react';
import Navbar from '../Components/NavbarIcons';
import '../IndexFunc.scss';
import WelcomeFunc from '../Components/WelcomeFunc';
import GoalArray from '../Components/GoalArray';

export default function IndexFunc() {
  return (
    <div>
      <Navbar />
      <div className="main">
        <WelcomeFunc />
        <GoalArray />
      </div>
    </div>
  );
}
