import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export default function ToDo({ item, toDos, setToDos }) {

    const deleteHandler = () => {
        let updatedList = toDos.filter((el) => el.id !== item.id);
        setToDos(updatedList);
    };

    const completeHandler = () => {
        let updatedList = toDos.forEach(iter => {
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
            <div className = "thirtyThree">
                <div className = "colorBar"></div>
                <li>{item.name}</li>
            </div>
            <div className = "thirtyThree"></div>
            <div className = "thirtyThree">
                <DeleteIcon onClick = {deleteHandler} />
                <button className = "checkButton" onClick = {completeHandler}></button>
            </div>
            {/* <button onClick = {displayLst}>Display List</button> */}
        </div>
    )
}

