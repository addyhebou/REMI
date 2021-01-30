import React, { Component } from 'react';
import '../App.css';

export default class GoalSet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: this.props.title,
             backgroundColor: this.props.color,
             tasks: [],
        };
    };

    updateTasks = () => {
        let i = 0;
        for (i = 0; i < this.props.children.length; ++i){
            this.setState({tasks: this.state.tasks.push(
                <h1>{this.props.children[i].props.children}</h1>
            )});
            console.log(this.state.tasks[i].props.children);
        }
    }





    render() {
        return (
            <div>
                <h2 onClick = {this.updateTasks} className = "Title" style = {{backgroundColor: "#"+this.state.backgroundColor}}>{this.state.title}</h2>
                {/* <div className = "Task">{this.props.children}</div> */}
                {/* <div className = "Task">{this.state.tasks}</div> */}
                <ul>
                    {this.state.tasks.map((task) => {
                        console.log(task)
                        return <li>{task}</li>
                    })}
                </ul>
            </div>
        )
    }
}
