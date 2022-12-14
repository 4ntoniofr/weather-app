export default function MainInfo({ icon, temp, date, city }) {
  // If any city has been searched
  if (icon !== "" && temp !== null && date !== "" && city !== "") {
    // Formating the response
    const dateFormated = date.substring(0, 10) + " " + date.substring(11, 16);
    const tempFormated = Math.round(temp) + "º";
    const iconFormated =
      "https://www.weatherbit.io/static/img/icons/" + icon + ".png";
    // Maininfo structure
    return (
      <div className="mainInfo">
        <img className="icon" src={iconFormated} alt={"weather icon"}></img>
        <p className="temp">{tempFormated}</p>
        <div className="cityDate">
          <p className="city">{city}</p>
          <p className="date">{dateFormated}</p>
        </div>
      </div>
    );
  }
}
