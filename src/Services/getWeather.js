// const getWeather = async () => {
//   try {
//     // Get the city and region
//     let res = await fetch(`http://ip-api.com/json/`);
//     if (!res.ok) throw new Error('HTTP error - ip-api');
//     let json = await res.json();
//     const city = json['city'];
//     const region = json['region'];

//     // API key for WeatherAPI
//     const appID = 'f33518e9773745fdafd61453220701';

//     // Get the temp, condition, icon, feel
//     res = await fetch(
//       `http://api.weatherapi.com/v1/forecast.json?key=${appID}&q=${city}&aqi=no`
//     );
//     if (!res.ok) throw new Error('HTTP error – weatherapi');
//     json = await res.json();
//     const temp = json['current']['temp_f'];
//     const condition = json['current']['condition']['text'].toLowerCase();
//     const icon = `http://${json['current']['condition']['icon'].slice(2)}`;
//     const feel = json['current']['feelslike_f'];

//     // Get the day
//     const date = new Date();
//     const hour = date.getHours();
//     const day = hour >= 12 ? (hour >= 17 ? 'evening' : 'afternoon') : 'morning';

//     const message =
//       temp > 50
//         ? temp > 63
//           ? temp > 80
//             ? "It's burning so dress like its summer time."
//             : 'Long sleeve shirts, pants, and sneaks is the way to go.'
//           : 'Dress for chilly weather.'
//         : 'Layer up a lot, man.';

//     // Return all 7 properties
//     return [city, region, temp, condition, icon, feel, day, message];
//   } catch (e) {
//     console.log('we made it here...');
//     console.log(e);
//     return;
//   }
// };

// module.exports.getWeather = await getWeather;
// module.exports.getWeather = getWeather;

// module.exports.getWeather = async function () {
//   await getWeather();
// };

// const weatherResponse = async () => {
//   const data = await getWeather();
//   return `The weather in ${data[0]}, ${data[1]} is currently ${data[2]} degrees, but it feels like ${data[5]} degrees. The condition is ${data[3]}. ${data[7]}.`;
// };

// module.exports.weatherResponse = weatherResponse;
