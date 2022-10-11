import { useState } from "react";
import MainInfo from "./components/MainInfo";
import weatherServices from "./services/weatherServices";
import CityForm from "./components/CityForm";
import Forecast from "./components/Forecast";

function App() {
  const [nombre, setNombre] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await weatherServices.getCurrentWeather(nombre);
    const dateResponse = await weatherServices.getLocalDate(
      response.data.data[0].timezone
    );
    const forecastResponse = await weatherServices.getForecast(nombre);
    setIcon(response.data.data[0].weather.icon);
    setTemp(response.data.data[0].temp);
    setCity(response.data.data[0].city_name);
    setDate(dateResponse.data.datetime);
    setForecast(forecastResponse.data.data);
    setLoading(false);
  };

  const loadingOrNot = () => {
    if (loading) {
      return <div className={"spinner"}></div>;
    } else {
      return (
        <MainInfo icon={icon} temp={temp} city={city} date={date}></MainInfo>
      );
    }
  };

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
