import React, { Component, useState } from 'react';

const ToDoList = (lst) =>{
    // How to map over objects
    console.log(lst);
    return(
        <div className = "toDoContainer">
            <ul className = "toDoList">
                <li>Test</li>
                {Object.keys(lst['toDos']).map(item =>{
                    <li>{item}</li>
                })}
                <li>Do I at least get this item?</li>
            </ul>
        </div>
    )
}

export default ToDoList;