import { useState } from "react";
import MainInfo from "./components/MainInfo";
import weatherServices from "./services/weatherServices";

function App() {
  const [nombre, setNombre] = useState("");
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(null);
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const response = await weatherServices.getCurrentWeather(nombre);
    const dateResponse = await weatherServices.getLocalDate(
      response.data.data[0].timezone
    );
    setIcon(response.data.data[0].weather.icon);
    setTemp(response.data.data[0].temp);
    setCity(response.data.data[0].city_name);
    setDate(dateResponse.data.datetime);
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
        <form onSubmit={handleSubmit}>
          <label>
            Ciudad
            <input
              type={"text"}
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            ></input>
          </label>
          <button type="submit">Dale</button>
        </form>
      </div>
    </div>
  );
}

export default App;
