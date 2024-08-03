import React, { useEffect, useRef, useState } from "react";
import "./weather.css";

const KEY = "35390b2cea190a25f0040ef2d4d0ee5f";

const Weather = () => {
  const inputRef = useRef();
  const [wdata, setWdata] = useState(false);
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setWdata({
        humidity: data.main.humidity,
        temperature: Math.floor(data.main.temp),
        windspeed: data.wind.speed,
        location: data.name,
      });
    } catch (err) {
      alert("hello");
    }
  };
  useEffect(() => {
    search("London");
  }, []);
  return (
    <div className="weather">
      <h1>Weather</h1>
      <div className="search">
        <input type="text" ref={inputRef} className="search-bar" />
        <button onClick={() => search(inputRef.current.value)}>search</button>
      </div>
      <div className="area">
        <p className="location">{wdata.location}</p>
        <p className="temperature">{wdata.temperature} C</p>
        <div className="humidity">
          <div className="col-1">
            <h4>Humidity</h4>
            <p className="h-value">{wdata.humidity}%</p>
          </div>
          <div className="col-2">
            <h4>Wind-speed</h4>
            <p className="w-value">{wdata.windspeed}Km\h</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
