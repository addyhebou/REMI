import React, { useState } from 'react';
import NavbarIcons from '../Components/NavbarIcons';
import Maintenance from '../Components/Maintenance/Maintenance';
import '../Styles/IndexFunc.scss';
import Welcome from '../Components/Welcome';
import GoalArray from '../Components/GoalArray';
import Routine from './Routine';
import Craft from '../Components/Craft/Craft';
import ShoppingList from '../Components/ShoppingList/ShoppingList';

export default function IndexFunc() {
  const [page, setPage] = useState<string>('home');
  const arr = {
    home: <GoalArray />,
    routine: <Routine />,
    shopping: <ShoppingList />,
    craft: <Craft />,
    maintenance: <Maintenance />,
  };
  return (
    <div className="IndexFunc">
      <Welcome />
      <NavbarIcons setPage={setPage} />
      {(arr as any)[page]}
    </div>
  );
}
