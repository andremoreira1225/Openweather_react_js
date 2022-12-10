import React, {useState} from "react";
import Axios from "axios";

function App() {


  //const url = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=86abd2e7547e6871dd05c8d415363346'
  
  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60 Cº</h1>
          </div>
        </div>
        <div className="description">
          <p></p>
        </div>
        <div className="bottom">
          <div className="feels">
            <p></p>
          </div>
          <div className="humidity"></div>
          <div className="wind"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
