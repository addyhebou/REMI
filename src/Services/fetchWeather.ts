import { IPAddressType, Weather } from '../Constants/Types/Weather';

export const fetchIPInformation = async () => {
  const response = await fetch('http://ip-api.com/json/');
  if (!response.ok) throw new Error('Res not okay');
  const json: IPAddressType = await response.json();
  return json;
};

export const fetchWeather = async ({ queryKey }: { queryKey: any }) => {
  const [_, city] = queryKey;
  // const response = await fetch(
  //   `http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${city}&aqi=no`
  // );
  const response = await fetch(
    'https://api.weatherapi.com/v1/forecast.json?key=f33518e9773745fdafd61453220701&q=Los%20Angeles&aqi=no'
  );
  if (!response.ok) throw new Error('Hey Addy, this is REMI throwing the Error');
  const json: Weather = await response.json();
  return json;
};

export const getTimeOfDay = (time?: string) => {
  if (!time) return 'day';
  const hour = parseInt(time.split(' ')[1].split(':')[0]);
  return hour > 18 ? 'evening' : hour > 12 ? 'afternoon' : 'morning';
};

export const getMessage = (temp?: number) => {
  if (!temp) return '';
  const message =
    temp > 50
      ? temp > 63
        ? temp > 80
          ? "It's burning so dress like its summer time."
          : 'Long sleeve shirts, pants, and sneaks is the way to go.'
        : 'Dress for chilly weather.'
      : 'Layer up a lot, man.';
  return message;
};

export const APP_KEY = 'f33518e9773745fdafd61453220701';
