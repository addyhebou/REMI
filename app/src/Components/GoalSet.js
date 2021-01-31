import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
        const temp = [];
        for (i = 0; i < this.props.children.length; ++i){
            temp.push(this.props.children[i].props.children);
        }
        this.setState(
            {tasks: temp}
        )
    }

    componentDidMount = () =>{
        this.updateTasks()
    }

    render() {
        return (
            <div>
                <Link 
                    style={{
                        textDecoration: 'none', 
                        color: 'black',
                    }}
                    to = {{
                        pathname: "/goal",
                        state: {
                            title: this.props.title,
                            tasks: this.state.tasks,
                        }
                    }}
                >
                <h2 className = "Title" style = {{backgroundColor: "#"+this.state.backgroundColor}}>{this.state.title}</h2>
                </Link>
                {this.state.tasks.map((task) => {
                    return <div className = "Task"><h2>{task}</h2></div>
                })}
            </div>
        )
    }
}