import "./CityForm.css";
export default function cityform({ nombre, setNombre, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="cityForm">
      <div className="inputSection">
        <input
          type={"text"}
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        ></input>
        <label>City</label>
      </div>
      <button type="submit">Search</button>
    </form>
  );
}
