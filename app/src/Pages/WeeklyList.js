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

    setToDos = (lst) => {
        this.setState({
            toDoList: lst,
        })
    }

    render() {
        return (
            <div>
                <h1>Your Weekly Goals</h1>
                <Form inputText = {this.state.inputText} setInputText = {this.setInputText} toDos = {this.state.toDoList} setToDos = {this.setToDos}/>
                <ToDoList item = {this.state.inputText} toDos = {this.state.toDoList} setToDos = {this.setToDos}/>
            </div>
        )
    }
}