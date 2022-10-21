import "./Forecast.css";
import "../icons/css/weather-icons-wind.min.css";
import "../icons/css/weather-icons.min.css";

export default function Forecast({ data }) {
  // Number to day of the week
  const weekDay = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  // Structure of the forecast's cards
  const dayChart = (day, id) => {
    // Formating the response
    const iconFormated =
      "https://www.weatherbit.io/static/img/icons/" + day.weather.icon + ".png";
    const dateFormated =
      weekDay[new Date(day.datetime).getDay()] + " " + day.datetime;
    const minTempFormated = Math.round(day.min_temp) + "º";
    const maxTempFormated = Math.round(day.max_temp) + "º";
    const precipFormated = Math.round(day.precip * 10) / 10 + " L/m2";
    const windFormated = day.wind_spd + " km/h ";
    
    // Structure with icons (i tag)
    return (
      <div className="dayChart" key={id}>
        <p className="date">{dateFormated}</p>
        <img className="icon" src={iconFormated} alt="Weather icon"></img>
        <div className="info">
          <p className="data maxtemp">
            <i className="flecha wi wi-direction-up"></i>
            {maxTempFormated}
          </p>
          <p className="data mintemp">
            <i className="flecha wi wi-direction-down"></i>
            {minTempFormated}
          </p>
          <p className="data precip">
            <i className="wi wi-umbrella"></i>
            {precipFormated}
          </p>
          <p className="data wind">
            <i
              className={"wi wi-wind wi-towards-" + day.wind_cdir.toLowerCase()}
            ></i>
            {windFormated}
          </p>
        </div>
      </div>
    );
  };

  // Return a card for each day
  return (
    <div className="forecast">
      {data.map((day, id) => {
        return dayChart(day, id);
      })}
    </div>
  );
}
