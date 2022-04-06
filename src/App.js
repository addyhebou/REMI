import './Styles/App.scss';
import './Pages/Index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Index from './Pages/Index';
import GoalPage from './Pages/GoalPage';
import WeeklyList from './Pages/WeeklyList';
import ShuffleTasks from './Pages/ShuffleTasks';
import React, { useState, useEffect, useRef } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import LoadScreen from '../src/Components/LoadScreen';
import IndexFunc from './Pages/IndexFunc';
import GoalPageFunc from './Pages/GoalPageFunc';
import Routine from './Pages/Routine';
import alanBtn from '@alan-ai/alan-sdk-web';
import Productivity from './Pages/Productivity';
import NavbarIcons from './Components/NavbarIcons';
import MusicProjects from './Pages/MusicProjects';

// const lib = require('./Services/getWeather');

function App() {
  const getWeather = async () => {
    try {
      // Get the city and region
      let res = await fetch(`http://ip-api.com/json/`);
      if (!res.ok) throw new Error('HTTP error - ip-api');
      let json = await res.json();
      const city = json['city'];
      const region = json['region'];

      // API key for WeatherAPI
      const appID = 'f33518e9773745fdafd61453220701';

      // Get the temp, condition, icon, feel
      res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${appID}&q=${city}&aqi=no`
      );
      if (!res.ok) throw new Error('HTTP error – weatherapi');
      json = await res.json();
      const temp = json['current']['temp_f'];
      const condition = json['current']['condition']['text'].toLowerCase();
      const icon = `http://${json['current']['condition']['icon'].slice(2)}`;
      const feel = json['current']['feelslike_f'];

      // Get the day
      const date = new Date();
      const hour = date.getHours();
      const day =
        hour >= 12 ? (hour >= 17 ? 'evening' : 'afternoon') : 'morning';

      const message =
        temp > 50
          ? temp > 63
            ? temp > 80
              ? "It's burning so dress like its summer time."
              : 'Long sleeve shirts, pants, and sneaks is the way to go.'
            : 'Dress for chilly weather.'
          : 'Layer up a lot, man.';

      // Return all 7 properties
      return [city, region, temp, condition, icon, feel, day, message];
    } catch (e) {
      console.log('we made it here...');
      console.log(e);
      return;
    }
  };
  const weatherResponse = async () => {
    const data = await getWeather();
    return `The weather in ${data[0]}, ${data[1]} is currently ${data[2]} degrees, but it feels like ${data[5]} degrees. The condition is ${data[3]}. ${data[7]}.`;
  };

  useEffect(async () => {
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
          console.log(await weatherResponse());
      },
    });
  }, []);

  const [loading, setLoading] = useState(false);
  return (
    <div className='App'>
      <alanBtn />
      {loading ? (
        <div>
          <LoadScreen />
          <RingLoader color={'#E584F6'} loading={loading} size={130} />
        </div>
      ) : (
        <Router>
          <Switch>
            {/* <Route exact path="/REMI" component={IndexFunc} /> */}
            <Route exact path='/goal' component={GoalPageFunc} />
            <Route exact path='/weeklyList' component={WeeklyList} />
            <Route exact path='/shuffleTasks' component={ShuffleTasks} />
            <Route exact path='/routine' component={Routine} />
            <Route exact path='/productivity' component={Productivity} />
            <Route exact path='/projects' component={MusicProjects} />
            <Route component={IndexFunc} />
            <Redirect to='/404' />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
