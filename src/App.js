import './Styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import WeeklyList from './Pages/WeeklyList';
import ShuffleTasks from './Pages/ShuffleTasks';
import React, { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import LoadScreen from '../src/Components/LoadScreen';
import IndexFunc from './Pages/IndexFunc';
import GoalPageFunc from './Pages/GoalPageFunc';
import Routine from './Pages/Routine';
import alanBtn from '@alan-ai/alan-sdk-web';
import Productivity from './Pages/Productivity';
import MusicProjects from './Pages/MusicProjects';

const lib = require('./Services/getWeather');

function App() {
  useEffect(() => {
    async function wakeUpAlan() {
      console.log('LISTENING TO JOJI');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      alanBtn({
        key: 'df2d60f277a4c7147f9bdf25551d9a4d2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: async (commandData) => {
          if (commandData.command === 'Good morning')
            alert('Rise and shine pumpernickel');
          else if (commandData.command === 'getWeather()')
            console.log(await lib.weatherResponse());
        },
      });
    }
    wakeUpAlan();
  }, []);

  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <alanBtn />
      {loading ? (
        <div>
          <LoadScreen />
          <RingLoader color={'#E584F6'} loading={loading} size={130} />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/goal" component={GoalPageFunc} />
            <Route exact path="/weeklyList" component={WeeklyList} />
            <Route exact path="/shuffleTasks" component={ShuffleTasks} />
            <Route exact path="/routine" component={Routine} />
            <Route exact path="/productivity" component={Productivity} />
            <Route exact path="/projects" component={MusicProjects} />
            <Route component={IndexFunc} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
