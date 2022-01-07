import React from 'react';
import ToDo from '../Components/ToDo.js';

const ToDoList = ({
  toDos,
  setToDos,
  categoryColor,
  setNumberOfCrossedOff,
  setNumberOfTasksLeft,
}) => {
  return (
    <div className='toDoContainer'>
      <ul className='toDoList'>
        {toDos.map((item) => {
          return (
            <ToDo
              item={item}
              toDos={toDos}
              setToDos={setToDos}
              categoryColor={categoryColor}
              setNumberOfCrossedOff={setNumberOfCrossedOff}
              setNumberOfTasksLeft={setNumberOfTasksLeft}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;

// Look at getting Harv to be a mentor info@harvmusic.com
