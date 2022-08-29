import React, { Component } from 'react'

export default class Steps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            tasks: [],
        }
    }
    
    updateSteps = () => {
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
        this.updateSteps()
    }

    render() {
        return (
            <div>
                {this.state.tasks.map((task) => {
                    return <div className = "Task"><h2>{task}</h2></div>
                })}
            </div>
        )
    }
}