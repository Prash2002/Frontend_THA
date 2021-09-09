import React, { useState, useEffect } from "react";
import TOKEN from "../token/token.js";

const WeatherCard = () => {
  const [placeData, setPlaceData] = useState(null);
  const [place, setPlace] = useState("London");
  function fetchApiData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${TOKEN}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  }

  return (
    <div>
      <div className="search row justify-content-center">
        <div className=" col-4 ">
          <input
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
        <button className="btn btn-primary col-2" onClick={fetchApiData}>
          Search
        </button>
      </div>
      {placeData === null ? (
        "Search for data"
      ) : placeData.cod === "404" ? (
        placeData.message
      ) : (
        <div className="card wCard">
          <h5 className="card-title">{placeData.name}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${placeData.weather[0].icon}@2x.png`}
            className="card-img-top icon-img"
            alt="weather img"
          />
          <div
            className="card-body"
            style={{
              paddingTop: "0px",
              borderBottom: "1px #ffffff94 solid",
              marginBottom: "20px",
            }}
          >
            <p className="card-title ">
              <span className="temp">
                {(placeData.main.temp - 273.16).toFixed(1)}{" "}
              </span>
              <span className="degree">°</span>
            </p>

            <p className="card-text h1">{placeData.weather[0].main}</p>
            <p className="card-text">{placeData.weather[0].description}</p>
          </div>
          <div className="row">
            <div
              className="card col-6"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="card-body">
                <h4 className="card-title">{placeData.wind.speed} km/hr</h4>
                <h6 className="card-subtitle mb-2" style={{ opacity: "0.7" }}>
                  Wind
                </h6>
              </div>
            </div>
            <div
              className="card col-6"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="card-body">
                <h4 className="card-title">{placeData.main.humidity} %</h4>
                <h6 className="card-subtitle mb-2" style={{ opacity: "0.7" }}>
                  Humidity
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
