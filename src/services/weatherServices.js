import axios from "axios";

const getLocalDate = async (timezone) => {
  const options = {
    method: "GET",
    url: "https://worldtimeapi.org/api/timezone/" + timezone,
  };

  return await axios.request(options);
};

const getCurrentWeather = async (name) => {
  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
    params: { city: name },
    headers: {
      "X-RapidAPI-Key": "d8f25ea3f5msh6d7b0e05537ca22p159631jsnf171b209a4e3",
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      lang: "es",
    },
  };

  return await axios.request(options);
};

const weatherServices = { getLocalDate, getCurrentWeather };
export default weatherServices;
