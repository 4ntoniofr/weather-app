import axios from "axios";

// Getting the date and time from a timezone
const getLocalDate = async (timezone) => {
  const options = {
    method: "GET",
    url: "https://worldtimeapi.org/api/timezone/" + timezone,
  };

  return await axios.request(options);
};

// Obtaining current weather from weatherbit API
const getCurrentWeather = async (name) => {
  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
    params: { city: name },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  return await axios.request(options);
};

// Obtaining the forecast of a city from weatherbit API
const getForecast = async (name) => {
  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily",
    params: { city: name },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  return await axios.request(options);
};

const weatherServices = { getLocalDate, getCurrentWeather, getForecast };
export default weatherServices;
