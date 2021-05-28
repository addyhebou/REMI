import React from 'react';
import ToDo from '../Components/ToDo.js';

const ToDoList = ({toDos, setToDos, categoryColor}) =>{
    return(
        <div className = "toDoContainer">
            <ul className = "toDoList">
                {
                    // console.log("type of toDos passed from this.state.toDoList: ", typeof toDos),
                    // console.log("toDos passed from the this.state.toDoList: ", toDos),
                    toDos.map(item => {
                        return (
                            <ToDo item = {item} toDos = {toDos} setToDos = {setToDos} categoryColor = {categoryColor}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList;

// Look at getting Harv to be a mentor info@harvmusic.com