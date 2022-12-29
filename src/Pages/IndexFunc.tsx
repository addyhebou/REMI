import React, { useState } from 'react';
import NavbarIcons from '../Components/NavbarIcons';
import '../Styles/IndexFunc.scss';
import Welcome from '../Components/Welcome';
import GoalArray from '../Components/GoalArray';
import Routine from './Routine';
import ShoppingList from '../Components/ShoppingList';
import Craft from '../Components/Craft/Craft';

export default function IndexFunc() {
  const [page, setPage] = useState<string>('home');
  const arr = {
    home: <GoalArray />,
    routine: <Routine />,
    shopping: <ShoppingList />,
    craft: <Craft />,
  };
  return (
    <div className="IndexFunc">
      <Welcome />
      <NavbarIcons setPage={setPage} />
      {(arr as any)[page]}
    </div>
  );
}
