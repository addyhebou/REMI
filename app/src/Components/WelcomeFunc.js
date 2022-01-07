import React from 'react';
import { useState, useEffect } from 'react';
import '../WelcomeFunc.scss';

export default function WelcomeFunc() {
  useEffect(async () => {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${appID}&q=${city}&aqi=no`
    );
    const json = await res.json();
    setTemp(json['current']['temp_f']);
    setCondition(json['current']['condition']['text'].toLowerCase());
    setIcon(`http://${json['current']['condition']['icon'].slice(2)}`);
    setFeel(json['current']['feelslike_f']);
    const date = new Date();
    const hour = date.getHours();
    const val = hour >= 12 ? (hour >= 18 ? 'Evening' : 'Afternoon') : 'Morning';
    setTimeOfDay(val);
  }, []);

  const [temp, setTemp] = useState(null);
  const [feel, setFeel] = useState(null);
  const [condition, setCondition] = useState(null);
  const [icon, setIcon] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState(null);

  const city = 'New York';
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
      <p>
        The weather in {city} is currently {temp}º, but it feels like {feel}.
      </p>
      <p> The condition is {condition}. </p>
      <p>{message}</p>
      <img src={icon} />
      <p>Here are the items for you to do today</p>
    </div>
  );
}
