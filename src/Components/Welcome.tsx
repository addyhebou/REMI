import React from 'react';
import { useState, useEffect } from 'react';
import { getWeather } from '../Services/getWeather';
import '../Styles/WelcomeFunc.scss';
import {
  fetchIPInformation,
  fetchWeather,
  getMessage,
  getTimeOfDay,
} from '../Services/fetchWeather';
import { useQuery } from '@tanstack/react-query';

export default function WelcomeFunc() {
  const { data: IPData } = useQuery(['IPData'], fetchIPInformation);
  const [city, setCity] = useState<string>(IPData?.city || '');
  const [region, setRegion] = useState<string>(IPData?.region || '');

  const { data: weatherData } = useQuery(['Weather_Data', city], fetchWeather);
  const [temp, setTemp] = useState<number>(weatherData?.current.temp_f || 0);
  const [message, setMessage] = useState<string>(getMessage(temp));
  const [feel, setFeel] = useState<number>(
    weatherData?.current.feelslike_f || 0
  );
  const [condition, setCondition] = useState<string>(
    weatherData?.current.condition.text || ''
  );
  const [icon, setIcon] = useState<string>(
    weatherData?.current.condition.icon || ''
  );

  const [timeOfDay, setTimeOfDay] = useState<string>(
    getTimeOfDay(weatherData?.location.localtime) || 'day'
  );

  useEffect(() => {
  }, []);

  return (
    <div className="welcome">
      <h1 className="REMITitle">R.E.M.I</h1>
      <h1>Good {timeOfDay}, Addy.</h1>
      {weatherData ? (
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
