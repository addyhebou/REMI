import React, { Component, useState } from 'react'
import Form from '../Components/Form';
import ToDoList from '../Components/ToDoList';
import '../App.scss';


export default class WeeklyList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             inputText: '',
             toDoList: [],
        }
    }

    setInputText = (text) =>{
        this.setState({ 
            inputText: text, 
        });
    }

    setToDos = (text) => {
        this.setState({
            toDoList: [],
        })
    }

    render() {
        return (
            <div>
                <h1>Your Weekly Goals</h1>
                <Form inputText = {this.inputText} setInputText = {this.setInputText} toDos = {this.toDoList} setToDos = {this.setToDos}/>
                <ToDoList item = {this.inputText}/>
            </div>
        )
    }
}