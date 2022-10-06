import React from "react";
import "./App.css";
import ActualWeather from "./components/ActualWeather";
import ForecastWeather from "./components/ForecastWeather";
import TodayWeather from "./components/TodayWeather";
import weather from "./weather.json";
function App() {
  // console.log(weather);
  let data;
  Object.entries(weather).map((el) => {
    Object.entries(el).map((cur) => {
      Object.entries(cur[1]).map((ele) => {
        Object.entries(ele[1]).map((elee) => {
          data = elee[1];
        });
      });
    });
  });
  //console.log(data);
  return (
    <div className="App">
      <ActualWeather props={data} />
      <ForecastWeather props={data} />
      <TodayWeather props={data} />
    </div>
  );
}
export default App;
