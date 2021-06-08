import React, { useState }from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export default function ToDo({ item, toDos, setToDos, setNumberOfCrossedOff, setNumberOfTasksLeft }) {

    // Handles deleting items
    const deleteHandler = () => {
        let updatedList = toDos.filter((el) => el.id !== item.id);
        setToDos(updatedList);
    };
    
    // Handles completion states
    const completeHandler = () => {
        let updatedList = toDos.forEach(iter => {
            if (iter.id === item.id){
                item.completed = !item.completed;
            }
        })
        console.log(updatedList);
    }
    
    
    // Handles the Strikethrough Texts
    const [isChecked, changeLine] = useState('none');
    const crossOff = () => {
        if (isChecked === 'none') {
            changeLine('line-through');
            setNumberOfTasksLeft(setNumberOfCrossedOff(true));
        }
        else {
            changeLine('none');
            setNumberOfTasksLeft(setNumberOfCrossedOff(false));
        }
        console.log(isChecked);
    }


    // Marks Tasks as Complete & Crosses Them Off
    const completeTaskFunc = () => {
        completeHandler();
        crossOff();
    }

    let color = item['color'];
    
    return (
        <div className = "toDoItem">
            <div className = "thirtyThree">
                <div className = "colorBar" style = {{backgroundColor: color}}></div>
                <li style = {{textDecorationLine: isChecked}}>{item.name}</li>
            </div>
            <div className = "thirtyThree"></div>
            <div className = "thirtyThree">
                <DeleteIcon onClick = {deleteHandler} />
                <input type = "checkbox" className = "checkButton" onClick = { completeTaskFunc }/>
            </div>
        </div>
    )
}

