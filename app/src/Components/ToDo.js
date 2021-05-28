import React, { useState, setState }from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export default function ToDo({ item, toDos, setToDos, categoryColor }) {

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

    const [color, setColor] = useState('');

    // const setColor = () => {
    //     setState(categoryColor);
    //     console.log("Color passed in is", categoryColor);
    // }

    console.log(categoryColor);
    return (
        <div className = "toDoItem">
            <div className = "thirtyThree">
                <div className = "colorBar" style = {{color: {categoryColor}}}></div>
                <li>{item.name}</li>
            </div>
            <div className = "thirtyThree"></div>
            <div className = "thirtyThree">
                <DeleteIcon onClick = {deleteHandler} />
                <input type = "checkbox" className = "checkButton" onClick = {completeHandler}/>
                {/* <button type = "checkbox" className = "checkButton" onClick = {completeHandler}></button> */}
            </div>
            {/* <button onClick = {displayLst}>Display List</button> */}
        </div>
    )
}

