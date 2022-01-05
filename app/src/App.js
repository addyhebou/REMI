import './App.scss';
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
import React, { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import LoadScreen from '../src/Components/LoadScreen';
import IndexFunc from './Pages/IndexFunc';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='App'>
      {loading ? (
        <div>
          <LoadScreen />
          <RingLoader color={'#E584F6'} loading={loading} size={130} />
        </div>
      ) : (
        <Router>
          <Switch>
            <Route exact path='/' component={IndexFunc} />
            <Route exact path='/goal' component={GoalPage} />
            <Route exact path='/weeklyList' component={WeeklyList} />
            <Route exact path='/shuffleTasks' component={ShuffleTasks} />
            <Route component={IndexFunc} />
            {/* <Route component = { Error }/> */}
            <Redirect to='/404' />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
