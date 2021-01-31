import React, { Component } from 'react'
import GoalSet from '../Components/GoalSet'

export default class Index extends Component {
    render() {
        return (
            <div>
                <h1>2021 <strong>Goals</strong></h1>
                <div className = "GoalArray">
                    <GoalSet className = "GoalSet" title = "Music Tech CEO" color = "AFD8EF">
                        <div>Read Books</div>
                        <div>YouTube/Beatstars Asset</div>
                        <div>CS Degree</div>
                        <div>Intern/Start-Up</div>
                        <div>Solo Projects</div>
                    </GoalSet>
                    <GoalSet title = "Critically Acclaimed Performer" color = "F59393">
                        <div>Strasberg Training</div>
                        <div>Film Roles</div>
                        <div>Sing a Lot</div>
                        <div>Dance a Lot</div>
                    </GoalSet>
                    <GoalSet title = "Music Creator" color = "EBBD87">
                        <div>Industry Quality Producer</div>
                        <div>Producer Brand</div>
                        <div>Vocal Mixing Skills</div>
                    </GoalSet>
                    <GoalSet title = "Financial Freedom" color = "C0EFAF">
                        <div>Job</div>
                        <div>Invest</div>
                        <div>Live Below Means</div>
                        <div>Scholarships</div>
                    </GoalSet>
                </div>
            </div>
        )
    }
}

