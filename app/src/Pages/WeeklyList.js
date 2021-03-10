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

    render() {
        return (
            <div>
                <h1>Your Weekly Goals</h1>
                <Form setInputText = {this.setInputText}/>
                <ToDoList item = {this.inputText}/>
            </div>
        )
    }
}