import React, { Component } from 'react'
import Form from '../Components/Form';
import ToDoList from '../Components/ToDoList';
import '../App.scss';

export default class WeeklyList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            inputText: '',
            toDoList: localStorage.getItem("lst") || [],
        }
    }

    setInputText = (text) =>{
        this.setState({ 
            inputText: text, 
        });
    }

    setToDos = (lst) => {
        // CURRENT PROBLEMS ARE HAPPENING RIGHT HERE
        localStorage.setItem("lst", JSON.stringify(lst))
        this.setState({
            toDoList: localStorage.getItem("lst"),
        })
        console.log("lst parameter", lst)
        console.log("this.toDoList", this.toDoList)
        console.log("Localstorage lst: ", localStorage.getItem("lst"))
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