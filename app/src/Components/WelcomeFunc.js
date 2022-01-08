import React from 'react';
import { useState, useEffect } from 'react';
import '../WelcomeFunc.scss';
import ToDoPreview from './ToDoPreview';

export default function WelcomeFunc() {
  useEffect(async () => {
    try {
      let res = await fetch(`http://ip-api.com/json/`);
      if (!res.ok) throw new Error('HTTP error - ip-api');
      let json = await res.json();
      setCity(json['city']);
      setRegion(json['region']);
      let city = json['city'];
      res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${appID}&q=${city}&aqi=no`
      );
      if (!res.ok) throw new Error('HTTP error – weatherapi');
      json = await res.json();
      setTemp(json['current']['temp_f']);
      setCondition(json['current']['condition']['text'].toLowerCase());
      setIcon(`http://${json['current']['condition']['icon'].slice(2)}`);
      setFeel(json['current']['feelslike_f']);
      const date = new Date();
      const hour = date.getHours();
      const val =
        hour >= 12 ? (hour >= 17 ? 'evening' : 'afternoon') : 'morning';
      setTimeOfDay(val);
    } catch (e) {
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

  const appID = 'f33518e9773745fdafd61453220701';

  const message =
    temp > 50
      ? temp > 63
        ? temp > 80
          ? "It's burning so dress like its summer time."
          : 'Long sleeve shirts, pants, and sneaks is the way to go.'
        : 'Dress for chilly weather.'
      : 'Layer up a lot, man.';
  return (
    <div className="welcome">
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
          wanna check your Internet
        </p>
      )}
    </div>
  );
}
