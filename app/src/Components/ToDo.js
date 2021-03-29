import React from 'react'

export default function ToDo({ item, toDos, setToDos }) {

    const deleteHandler = () => {
        let updatedList = toDos.filter((el) => el.id !== item.id);
        setToDos(updatedList);
    };

    const completeHandler = () => {
        let updatedList = toDos.map(iter => {
            if (iter.id === item.id){
                item.completed = !item.completed;
            }
        })
        console.log(updatedList)
        // setToDos(updatedList);
    }

    const displayLst = () => {
        console.log(toDos);
    }
    return (
        <div className = "toDoItem">
            <li>{item.name}</li>
            <button onClick = {completeHandler}>Check</button>
            <button onClick = {deleteHandler}>Trash</button>
            <button onClick = {displayLst}>Display List</button>
        </div>
    )
}

