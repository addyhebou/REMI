import '../Styles/App.scss';
import React, { Component } from 'react';
import GoalSet from '../Components/GoalSet';
import Navbar from '../Components/NavbarIcons';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="GoalArray">
          <GoalSet title="Tech CEO" className="GoalSet" color="AFD8EF">
            <div>CS Degree</div>
            <div>SDE Job</div>
          </GoalSet>
          <GoalSet title="Critically Acclaimed Performer" color="F59393">
            <div>Develop Vocal Tone</div>
            <div>Create Unique Dance Style</div>
          </GoalSet>
          <GoalSet title="Music Creator" color="EBBD87">
            <div>Sharpen YOUR Sound</div>
            <div>Top-40 Producer</div>
            <div>Producer Brand</div>
            <div>Vocal Mixing Skills</div>
            <div>Industry Level Up</div>
          </GoalSet>
          <GoalSet title="Financial Freedom" color="C0EFAF">
            <div>HIGH Credit Score</div>
            <div>Max Streams of Income</div>
            <div>Invest</div>
            <div>Live Below Means</div>
          </GoalSet>
          <GoalSet title="Personal Goals" color="d1a9d4">
            <div>At-Work Ethic</div>
            <div>Good Sleep</div>
            <div>Personal Fitness</div>
            <div>Mental Health</div>
            <div>Miina</div>
            <div>Model Form</div>
          </GoalSet>
        </div>
      </div>
    );
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
