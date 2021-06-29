import '../App.scss'
import React, { Component } from 'react'
import GoalSet from '../Components/GoalSet'
import Navbar from '../Components/NavbarIcons'

export default class Index extends Component {
    render() {
        console.log("hollywood cole");
        return (
            <div>
                <Navbar />
                <div className = "GoalArray">
                    <GoalSet className = "GoalSet" title = "Music Tech CEO" color = "AFD8EF">
                        <div>Develop SoundGood</div>
                        <div>CS Degree</div>
                        <div>Intern/Work</div>
                        <div>Stellar Portfolio</div>
                    </GoalSet>
                    <GoalSet title = "Critically Acclaimed Performer" color = "F59393">
                        <div>Sing a Lot</div>
                        <div>Dance a Lot</div>
                    </GoalSet>
                    <GoalSet title = "Music Creator" color = "EBBD87">
                        <div>Sharpen YOUR Sound</div>
                        <div>Top-40 Producer</div>
                        <div>Producer Brand</div>
                        <div>Vocal Mixing Skills</div>
                        <div>Industry Level Up</div>
                    </GoalSet>
                    <GoalSet title = "Financial Freedom" color = "C0EFAF">
                        <div>HIGH Credit Score</div>
                        <div>Max Streams of Income</div>
                        <div>Invest</div>
                        <div>Live Below Means</div>
                    </GoalSet>
                    <GoalSet title = "Personal Goals" color = "d1a9d4">
                        <div>At-Work Ethic</div>
                        <div>Good Sleep</div>
                        <div>Personal Fitness</div>
                        <div>Mental Health</div>
                        <div>Miina</div>
                        <div>Model Form</div>
                    </GoalSet>
                </div>
            </div>
        )
    }
}

/*

    SMART
    S: Specific (exactly what you wanna attain)
    M: Measurable (how to track it)
    A: Attainable (steps to achieve)
    R: Realistic (is it possible)
    T: Time Bound (deadline)

*/

