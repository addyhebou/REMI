import React, { useState, setState }from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export default function ToDo({ item, toDos, setToDos, categoryColor }) {

    // console.log("The color passed in to this ToDo item is: ", categoryColor);


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
        console.log(updatedList)
    }
    
    
    // Handles the Strikethrough Texts
    const [isChecked, changeLine] = useState('none');
    const addLine = () => {
        if (isChecked === 'none') changeLine('line-through');
        else changeLine('none');
        console.log(isChecked);
    }

    let color = item['color'];
    
    console.log('The color for this entry is ', color);
    return (
        <div className = "toDoItem">
            <div className = "thirtyThree">
                <div className = "colorBar" style = {{backgroundColor: color}}></div>
                <li style = {{textDecorationLine: isChecked}}>{item.name}</li>
            </div>
            <div className = "thirtyThree"></div>
            <div className = "thirtyThree">
                <DeleteIcon onClick = {deleteHandler} />
                <input type = "checkbox" className = "checkButton" onClick = {completeHandler, addLine}/>
            </div>
        </div>
    )
}

