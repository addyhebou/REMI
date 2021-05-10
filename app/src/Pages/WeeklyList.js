import React, { Component } from 'react'
import Form from '../Components/Form';
import ToDoList from '../Components/ToDoList';
import '../App.scss';

export default class WeeklyList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            inputText: '',
            toDoList: JSON.parse(localStorage.getItem("lst")) || [],
            length: JSON.parse(localStorage.getItem("lst")).length || 0,
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
            toDoList: JSON.parse(localStorage.getItem("lst")),
            length: JSON.parse(localStorage.getItem("lst")).length,
        })
        // console.log("lst parameter", lst)
        // console.log("this.state.toDoList", this.state.toDoList)
        // console.log("Localstorage lst: ", localStorage.getItem("lst"))
        // console.log("localstorage lst back as an object", JSON.parse(localStorage.getItem("lst")))
        // console.log("Type of this.state.toDoList", typeof this.state.toDoList)
        console.log("Length of object:", this.state.length);
    }

    setCategory = (category) => {
        if (category === "MusicCreator") return "#EBBD87";
        else if (category === "FinancialFreedom") return "#C0EFAF";
        else if (category === "Performance") return "#F59393";
        else if (category === "MusicTech") return "#AFD8EF";
        else if (category === "Personal") return "#D1A9D4";
    }

    render() {
        return (
            <div>
                <h1>Your Weekly Goals</h1>
                <h3>Total Tasks: {this.state.length}</h3>
                <Form
                    inputText = {this.state.inputText} 
                    setInputText = {this.setInputText} 
                    toDos = {this.state.toDoList} 
                    setToDos = {this.setToDos} 
                    setCategory = {this.setCategory}/>
                <ToDoList 
                    item = {this.state.inputText} 
                    toDos = {
                        (this.state.toDoList.length != 0) ? (this.state.toDoList)
                        :([])
                    }
                    setToDos = {this.setToDos}
                    categoryColor = {this.setCategory()}/>
            </div>
        )
    }
}