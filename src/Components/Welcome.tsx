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

  const [temp, setTemp] = useState<string>('');
  const [feel, setFeel] = useState<string>('');
  const [condition, setCondition] = useState<string>('');
  const [icon, setIcon] = useState<string>('');
  const [timeOfDay, setTimeOfDay] = useState<string>('day');
  const [city, setCity] = useState<string>('');
  const [region, setRegion] = useState<string>('');
  const [message, setMessage] = useState<string>('');

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
