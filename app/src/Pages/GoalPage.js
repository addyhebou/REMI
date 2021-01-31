import React, { Component } from 'react'
import '../App.css';

export default class GoalPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            title: this.props.location.state.title,
            tasks: this.props.location.state.tasks,
        }
    }
    

    render() {
        console.log("Tasks are " + this.state.tasks + ". The type is " + typeof this.state.tasks
        + ". Item 1 in tasks is " + this.state.tasks[0] + ".")
        return (
                <div>
                    <h1>{this.state.title}</h1>
                    <h2 className = "Task">{this.state.task}</h2>
                    {this.state.tasks.map((task) => {
                    return (
                        <div className = "Task"><h2>{task}</h2></div>
                    )
                    })}
                </div>
            )
    }
}

