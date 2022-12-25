import React from 'react';
import { useState, useEffect } from 'react';
import { getWeather } from '../Services/getWeather';
import '../Styles/WelcomeFunc.scss';

export default function WelcomeFunc() {
  useEffect(() => {
    async function fetchWeather() {
      try {
        const vals = getWeather();
        setCity(vals[0]);
        setRegion(vals[1]);
        setTemp(vals[2]);
        setCondition(vals[3]);
        setIcon(vals[4]);
        setFeel(vals[5]);
        setTimeOfDay(vals[6]);
        setMessage(vals[7]);
      } catch (e) {
        console.log(e);
      }
    }
    fetchWeather();
  }, []);

  const [temp, setTemp] = useState(null);
  const [feel, setFeel] = useState(null);
  const [condition, setCondition] = useState(null);
  const [icon, setIcon] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState('day');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="welcome">
      <h1 className="REMITitle">R.E.M.I</h1>
      <h1>Good {timeOfDay}, Addy.</h1>
      {temp ? (
        <>
          <p>
            The weather in {city}, {region} is currently {temp}º, but it feels
            like {feel}º.
          </p>
          <p> The condition is {condition}. </p>
          <p>{message}</p>
          <img src={icon} alt="Weather icon" />
        </>
      ) : (
        <p>
          No information on the weather & your to-do list right now... might
          wanna check your Internet...
        </p>
      )}
    </div>
  );
}
