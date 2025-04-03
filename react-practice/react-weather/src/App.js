import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef } from "react";

function App() {
  const Clock = () => {
    const clock = useRef();
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    function getClock() {
      const date = new Date();
      setHours(String(date.getHours()).padStart(2, "0"));
      setMinutes(String(date.getMinutes()).padStart(2, "0"));
    }
    useEffect(() => {
      getClock();
      setInterval(getClock, 1000);
    }, []);

    return (
      <h2 ref={clock} id="clock">
        {hours} : {minutes}
      </h2>
    );
  };

  const Location = (props) => {
    return (
      <h2 id="location">
        {props.area} / {props.lat} / {props.lng}
      </h2>
    );
  };
  const Weather = () => {
    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?lat=35.1176&lon=129.0451&units=metric&appid=6edee3c2aa182bc44d18ccb204c98a31";
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      const lat = data.coord.lat;
      const lon = data.coord.lon;
      const name = data.name;
      document.querySelector(
        "#location"
      ).innerHTML = `${name} / ${lat} / ${lon}`;

      const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      const temp = data.main.temp;
      const speed = data.wind.speed;
      const main = data.weather[0].main;

      document.querySelector(
        "#weather > span:nth-child(1)"
      ).innerHTML = `${main}`;
      document.querySelector(
        "#weather > span:nth-child(2)"
      ).innerHTML = `<img src='${icon}'>`;
      document.querySelector(
        "#weather > span:nth-child(3)"
      ).innerHTML = `${temp.toFixed(1)}℃`;
      document.querySelector(
        "#weather > span:nth-child(4)"
      ).innerHTML = `${speed}m/s`;
    };

    <div id="weather">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>;
  };
  return (
    <div className="App">
      <Clock />
      <Location area="Busan" lat={35.1176} lng={129.0451} />
      <Weather />
    </div>
  );
}

export default App;
