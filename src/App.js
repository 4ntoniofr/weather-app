import { useState } from "react";
import MainInfo from "./components/MainInfo"; // Maininfo component
import weatherServices from "./services/weatherServices"; // API services
import CityForm from "./components/CityForm"; // Search form component
import Forecast from "./components/Forecast"; // Forecast cards component

function App() {
  const [nombre, setNombre] = useState(""); // City form value
  const [icon, setIcon] = useState(""); // Maininfo icon
  const [temp, setTemp] = useState(null); // Maininfo temperature
  const [city, setCity] = useState(""); // Real name of the city
  const [date, setDate] = useState(""); // Current date
  const [forecast, setForecast] = useState([]); // Array with the forecast
  const [loading, setLoading] = useState(false); // Is the app loading?

  // Search
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // The app is loading
    const response = await weatherServices.getCurrentWeather(nombre); // Obtaining current weather
    const dateResponse = await weatherServices.getLocalDate(
      // Obtaining local time
      response.data.data[0].timezone
    );
    const forecastResponse = await weatherServices.getForecast(nombre); // Obtaining forecast
    // Setting maininfo data and forecast
    setIcon(response.data.data[0].weather.icon);
    setTemp(response.data.data[0].temp);
    setCity(response.data.data[0].city_name);
    setDate(dateResponse.data.datetime);
    setForecast(forecastResponse.data.data);
    setLoading(false); // Stop loading
  };

  // If the app is loading do not show the main info. Instead, it shows the spinner.
  const loadingOrNot = () => {
    if (loading) {
      return <div className={"spinner"}></div>;
    } else {
      return (
        <MainInfo icon={icon} temp={temp} city={city} date={date}></MainInfo>
      );
    }
  };

  // App structure
  return (
    <div className="main">
      <div className="leftDiv">{loadingOrNot()}</div>
      <div className="rightDiv">
        <CityForm
          nombre={nombre}
          setNombre={setNombre}
          handleSubmit={handleSubmit}
        ></CityForm>
        <Forecast data={forecast}></Forecast>
      </div>
    </div>
  );
}

export default App;
