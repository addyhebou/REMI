import React from 'react';
import { useState, useEffect } from 'react';
import ToDoList from '../Components/ToDoList';

export function WeeklyListFunc() {
  const [input, setInput] = useState('');
  const [list, setList] = useState(getLocalList() || []);
  const [length, setLength] = useState(0);
  const [color, setColor] = useState('');
  const [numberOfCrossedOff, setNumberOfCrossedOff] = useState(0);

  const getLocalList = () => {
    return JSON.parse(localStorage.getItem('lst'));
  };

  const setToDos = (lst) => {
    localStorage.setItem('lst', JSON.stringify(lst));
    setList(getLocalList());
    setLength(setNumberOfTasksLeft(numberOfCrossedOff));
  };

  const setCategory = (category) => {
    if (category === 'MusicCreator') {
      return '#EBBD87';
    } else if (category === 'FinancialFreedom') return '#C0EFAF';
    else if (category === 'Performance') return '#F59393';
    else if (category === 'MusicTech') return '#AFD8EF';
    else if (category === 'Personal') return '#D1A9D4';
    return '#AFD8EF';
  };

  const modifyCompleted = (isCrossed) => {
    setNumberOfCrossedOff(numberOfCrossedOff + (isCrossed ? 1 : -1));
    return numberOfCrossedOff;
  };

  const setNumberOfTasksLeft = (completed) => {
    return getLocalList().length - completed;
  };

  return (
    <div>
      <h1>Your Weekly Goals</h1>
      <h3>Total Tasks: {length}</h3>
      <Form
        input={input}
        setInputFunc={setInput}
        toDos={list}
        setToDos={setToDos}
        categoryColor={color}
        modifyCompleted={setNumberOfCrossedOff}
        setNumberOfTasksLeft={setNumberOfTasksLeft}
      />
      <ToDoList />
    </div>
  );
}
