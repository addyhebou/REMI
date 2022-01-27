import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/App.scss';

export default class GoalSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      backgroundColor: this.props.color,
      tasks: [],
      randomYPosition: 0,
    };
  }

  updateTasks = () => {
    let i = 0;
    const temp = [];
    for (i = 0; i < this.props.children.length; ++i) {
      temp.push(this.props.children[i].props.children); // Adding all children to temp
    }
    const num = Math.floor(Math.random() * 10 + 1); // Getting random val to add to y position
    this.setState({
      tasks: temp,
      randomYPosition: num,
    });
  };

  componentDidMount = () => {
    this.updateTasks();
  };

  render() {
    return (
      <div className="Floater">
        <Link
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
          to={{
            pathname: '/goal',
            state: {
              title: this.props.title,
              tasks: this.state.tasks,
            },
          }}
        >
          <h2
            className="Title"
            style={{
              backgroundColor: '#' + this.state.backgroundColor,
              transform: 'translate(0, ' + this.state.randomYPosition + 'px)',
            }}
          >
            {this.state.title}
          </h2>
        </Link>
        {this.state.tasks.map((task) => {
          return (
            <div className="Task">
              <h2>{task}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}
