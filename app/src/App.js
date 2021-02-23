import './App.scss';
import './Pages/Index';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Index from './Pages/Index'
import GoalPage from './Pages/GoalPage'
import React, {useState, useEffect} from 'react';
import RingLoader from "react-spinners/RingLoader";




function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className = "App">
      {
        loading ? (
          <RingLoader class = "Loader" color={"#E584F6"} loading={loading} size={130} />
        ) : (
          <Router>
            <Switch>
              <Route exact path = "/" component = { Index }/>
              <Route exact path = "/goal" component = { GoalPage }/>
              <Route component = { Index }/>
              {/* <Route component = { Error }/> */}
              <Redirect to = "/404"/>
            </Switch>
          </Router>
        )
      }
      
    </div>
  );
}

export default App;
