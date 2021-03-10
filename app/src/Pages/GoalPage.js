import React, { Component } from 'react'
import Step from '../Components/Step'
import Goals from '../Data/Goals.json'
import '../App.scss';

export default class GoalPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            title: this.props.location.state.title,
            tasks: this.props.location.state.tasks,
            displaySteps: false,
        }
    }

    displaySteps = () =>{
        this.setState({
            displaySteps: !this.state.displaySteps,
        });
        this.state.displaySteps ? (
            console.log("Display on")
        ) : (
            console.log("Display off")
        );
    }



    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h2 className = "Task Task_Mobile">{this.state.task}</h2>
                {this.state.tasks.map((task) => {
                    let b = 10;
                    // {console.log(Goals[this.state.title]["Tasks"][task]["Steps"])};
                    return (
                        <div>
                            <div className = "Task Task_Mobile">
                                <h2 onClick={this.displaySteps.bind(null, !this.state.displaySteps)}>{task}</h2>
                            </div>
                            { this.state.displaySteps && 
                                <div>
                                    <h3 className = "SMARTGoal">{Goals[this.state.title]["Tasks"][task]["SMART Goal"]}</h3>
                                    {Goals[this.state.title]["Tasks"][task]["Steps"].map((step) =>
                                        {
                                            return (
                                                <Step>{step}</Step>
                                            )
                                        }
                                    )}
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
}


{/* // {if (this.state.displaySteps){ */}
{/* //                                         Goals[this.state.title]["Tasks"][task]["Steps"]).map((step) =>{
//                                             return <Step>{step}</Step>
//                                         }
//                                     }}
 */}
