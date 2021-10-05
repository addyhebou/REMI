import React, { Component, setState } from 'react';
import Form from '../Components/Form';
import ToDoList from '../Components/ToDoList';
import '../App.scss';

export default class WeeklyList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputText: '',
      toDoList: JSON.parse(localStorage.getItem('lst')) || [],
      length: 0,
      color: '',
      numberOfCrossedOff: 0,
    };
  }

  async componentDidMount() {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' }),
    };
    const url = 'https://ancient-coast-78698.herokuapp.com/';
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
    console.log(data);
    data.forEach((element) => {
      element['id'] = Math.random() * 1000;
      if (element['category'] === 'Music Creator') element['color'] = '#EBBD87';
      if (element['category'] === 'Financial Freedom')
        element['color'] = '#C0EFAF';
      else if (element['category'] === 'Performance')
        element['color'] = '#F59393';
      else if (element['category'] === 'Tech') element['color'] = '#AFD8EF';
      else if (element['category'] === 'Personal') element['color'] = '#D1A9D4';
    });
    this.setState({
      toDoList: data,
    });
    console.log(data);
  }

  setColor = (hexCode) => {
    this.setState({
      color: hexCode,
    });
  };

  setInputText = (text) => {
    this.setState({
      inputText: text,
    });
  };

  setToDos = (lst) => {
    // CURRENT PROBLEMS ARE HAPPENING RIGHT HERE
    localStorage.setItem('lst', JSON.stringify(lst));
    this.setState({
      toDoList: JSON.parse(localStorage.getItem('lst')),
      length: this.setNumberOfTasksLeft(this.state.numberOfCrossedOff),
      // length: JSON.parse(localStorage.getItem("lst")).length,
    });
    // console.log("lst parameter", lst)
    // console.log("this.state.toDoList", this.state.toDoList)
    // console.log("Localstorage lst: ", localStorage.getItem("lst"))
    // console.log("localstorage lst back as an object", JSON.parse(localStorage.getItem("lst")))
    // console.log("Type of this.state.toDoList", typeof this.state.toDoList)
  };

  setCategory = (category) => {
    if (category === 'MusicCreator') {
      return '#EBBD87';
    } else if (category === 'FinancialFreedom') return '#C0EFAF';
    else if (category === 'Performance') return '#F59393';
    else if (category === 'MusicTech') return '#AFD8EF';
    else if (category === 'Personal') return '#D1A9D4';
    return '#AFD8EF';
  };

  setNumberOfCrossedOff = (bool) => {
    if (bool) {
      this.setState({
        numberOfCrossedOff: this.state.numberOfCrossedOff + 1,
      });
    } else {
      this.setState({
        numberOfCrossedOff: this.state.numberOfCrossedOff - 1,
      });
    }
    return this.state.numberOfCrossedOff;
  };

  setNumberOfTasksLeft = (numberOfCrossedOff) => {
    return JSON.parse(localStorage.getItem('lst')).length - numberOfCrossedOff;
  };

  render() {
    // console.log(setCategory());
    // let color = setCategory();
    // console.log(color);
    console.log(
      'From WeeklyList, the number of crossed off: ',
      this.state.numberOfCrossedOff
    );
    console.log(this.state.toDoList);
    return (
      <div>
        <h1>Your Weekly Goals</h1>
        <h3>Total Tasks: {this.state.length}</h3>
        <Form
          inputText={this.state.inputText}
          setInputText={this.setInputText}
          toDos={this.state.toDoList}
          setToDos={this.setToDos}
          setCategory={this.setCategory}
        />
        <ToDoList
          item={this.state.inputText}
          toDos={this.state.toDoList.length !== 0 ? this.state.toDoList : []}
          setToDos={this.setToDos}
          categoryColor={this.state.color}
          setNumberOfCrossedOff={this.setNumberOfCrossedOff}
          setNumberOfTasksLeft={this.setNumberOfTasksLeft}
        />
      </div>
    );
  }
}
