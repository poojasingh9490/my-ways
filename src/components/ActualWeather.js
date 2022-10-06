import React from "react";
import "./ActualWeather.css";
function ActualWeather(props) {
  let location;
  let temp, text, max, low;
  Object.entries(props).map((el) => {
    location = el[1].location;
    temp = el[1].item.condition.temp;
    text = el[1].item.condition.text;
    max = el[1].item.forecast[0].high;
    low = el[1].item.forecast[0].low;
  });
  return (
    <div className="main">
      <div className="main-card">
        <div className="main-card-header">
          <h1>
            {location.city} , {location.region} , {location.country}
            <span> As of 04.12 EDT</span>
          </h1>
        </div>
        <div className="main-card-one">
          <div className="main-card-two">
            <span className="degree">{temp}°</span>
            <div className="value">{text}</div>
            <div className="value-1">
              Day <span>{max}°</span> . Night <span>{low}°</span>
            </div>
          </div>
          <div>
            <img src={require("./nighticon.png")} alt="icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ActualWeather;
