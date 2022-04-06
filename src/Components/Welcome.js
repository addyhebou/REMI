import React from 'react';
import { useState, useEffect } from 'react';
import '../Styles/WelcomeFunc.scss';
import ToDoPreview from './ToDoPreview';
// const lib = require('../Services/getWeather');

export default function WelcomeFunc() {
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
  useEffect(async () => {
    try {
      const vals = await getWeather();
      setCity(vals[0]);
      setRegion(vals[1]);
      setTemp(vals[2]);
      setCondition(vals[3]);
      setIcon(vals[4]);
      setFeel(vals[5]);
      setTimeOfDay(vals[6]);
      setMessage(vals[7]);
    } catch (e) {
      console.log('We reached an error on reading the weather...');
      console.log(e);
    }
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
    <div className='welcome'>
      <h1>Good {timeOfDay}, Addy.</h1>
      {temp ? (
        <div>
          <p>
            The weather in {city}, {region} is currently {temp}º, but it feels
            like {feel}º.
          </p>
          <p> The condition is {condition}. </p>
          <p>{message}</p>
          <img src={icon} />
          <p>Here are the items for you to do today:</p>
          <ToDoPreview />
        </div>
      ) : (
        <p>
          No information on the weather & your to-do list right now... might
          wanna check your Internet...
        </p>
      )}
    </div>
  );
}
