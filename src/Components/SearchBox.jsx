import {useEffect, useState} from "react";
import {TextField, Button} from "@mui/material";
const SearchBox = ({updateInfo}) => {
  const [city, setCity] = useState("Bhubaneswar");

  const API_KEY = "3e47a86dcfee2bfe82ac09ecfd27676a";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const getWeatherData = async () => {
    try {
      const res = await fetch(URL);
      const JsonData = await res.json();
      let result = {
        city: city,
        feels_like: JsonData.main.feels_like,
        humidity: JsonData.main.humidity,
        temp: JsonData.main.temp,
        temp_max: JsonData.main.temp_max,
        temp_min: JsonData.main.temp_min,
        description: JsonData.weather[0].description,
        speed: JsonData.wind.speed,
        main: JsonData.weather[0].main,
      };
      return result;
    } catch (e) {
      let result = {
        city: "this location",
        feels_like: "",
        humidity: "",
        temp: "",
        temp_max: "",
        temp_min: "",
        description: "not found",
        speed: "",
      };
      return result;
    }
  };

  const handelCity = (e) => {
    setCity(e.target.value);
  };
  const printCity = async (e) => {
    e.preventDefault();
    setCity("");
    let result = await getWeatherData();
    updateInfo(result);
  };
  useEffect(() => {
    async function renderPage() {
      let res = await getWeatherData();
      updateInfo(res);
      setCity("")
    }
    renderPage();
  }, []);
  return (
    <div className="SearchBox">
      <h2>Search for the Weather</h2>
      <form onSubmit={printCity}>
        <TextField
          className="SearchInput"
          id="city"
          label="Entre City"
          variant="outlined"
          onChange={handelCity}
          value={city}
        />
        <Button className="SearchSubmitBtn" variant="outlined" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBox;
