import React from "react";
import "./ForecastWeather.css";
function ForecastWeather(props) {
  let location;
  Object.entries(props).map((el) => {
    location = el[1].location;
  });
  //console.log(location);
  return (
    <div className="main-card-1">
      <header className="card-header">
        <h2 className="card-header-value">
          Today's ForeCast for {location.city} City,{location.region},
          {location.country}
        </h2>
      </header>
      <div className="value-forecast">
        <ul className="make-hour">
          <li className="make-hour-1">
            <a href="#" className="make-hour-2">
              <h3 className="make-hour-3">Morning </h3>
              <div className="make-hout-4">40°</div>
              <div>
                <img src={require("./first.png")} alt="icon"></img>
              </div>
              <div className="make-hour-5">
                <span className="make-hour-6">--</span>
              </div>
            </a>
          </li>
          <li className="make-hour-1">
            <a href="#" className="make-hour-2">
              <h3 className="make-hour-3">Afternoon </h3>
              <div className="make-hout-4">44°</div>
              <div>
                <img src={require("./first.png")} alt="icon"></img>
              </div>
              <div className="make-hour-5">
                <span className="make-hour-6">--</span>
              </div>
            </a>
          </li>
          <li className="make-hour-1">
            <a href="#" className="make-hour-2">
              <h3 className="make-hour-3">Evening </h3>
              <div className="make-hout-4">40°</div>
              <div>
                <img src={require("./first.png")} alt="icon"></img>
              </div>
              <div className="make-hour-5">
                <span className="make-hour-6">--</span>
              </div>
            </a>
          </li>
          <li className="make-hour-1">
            <a href="#" className="make-hour-2">
              <h3 className="make-hour-3">Overnight </h3>
              <div className="make-hout-4">35°</div>
              <div>
                <img src={require("./fourth.png")} alt="icon"></img>
              </div>
              <div className="make-hour-5">
                <span className="make-hour-6">--</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <footer className="make-hour-7">
        <a href="#" className="make-hour-8">
          Next Hours
        </a>
      </footer>
    </div>
  );
}

export default ForecastWeather;
