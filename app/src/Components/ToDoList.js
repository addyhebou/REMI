import React, { Component, useState } from 'react';
import ToDo from '../Components/ToDo.js';

const ToDoList = ({toDos, setToDos}) =>{
    return(
        <div className = "toDoContainer">
            <ul className = "toDoList">
                {
                    toDos.map(item => {
                        return (
                            <ToDo item = {item} toDos = {toDos} setToDos = {setToDos}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList;

// Look at getting Harv to be a mentor info@harvmusic.com