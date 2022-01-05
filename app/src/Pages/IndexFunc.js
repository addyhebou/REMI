import React from 'react';
import Navbar from '../Components/NavbarIcons';
import GoalSetFunc from '../Components/GoalSetFunc';

export default function IndexFunc() {
  const categories = [
    'Tech CEO',
    'Critically Acclaimed',
    'Music Creator',
    'Financial Freedom',
    'Personal',
  ];
  return (
    <div>
      <Navbar />
      <div className='goalArray'>
        {categories.map((c) => {
          return <GoalSetFunc category={c} />;
        })}
      </div>
    </div>
  );
}
