import './Styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import LoadScreen from './Components/LoadScreen';
import IndexFunc from './Pages/IndexFunc';
import Routine from './Pages/Routine';
import alanBtn from '@alan-ai/alan-sdk-web';

import { weatherResponse } from './Services/getWeather';

function App() {
  useEffect(() => {
    async function wakeUpAlan() {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
      alanBtn({
        key: 'df2d60f277a4c7147f9bdf25551d9a4d2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: async (commandData: any) => {
          if (commandData.command === 'Good morning')
            alert('Rise and shine pumpernickel');
          else if (commandData.command === 'getWeather()')
            console.log(await weatherResponse());
        },
      });
    }
    wakeUpAlan();
  }, []);

  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      {/* <alanBtn /> // needs to be imported correctly with proper imports */}
      {loading ? (
        <div>
          <LoadScreen />
          <RingLoader color={'#E584F6'} loading={loading} size={130} />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/routine" component={Routine} />
            <Route component={IndexFunc} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
