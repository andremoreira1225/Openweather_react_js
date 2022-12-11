import React, {useState} from "react";
import Axios from "axios";
import axios from "axios";

function App() {

  const [data,setdata] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=86abd2e7547e6871dd05c8d415363346`
  
  const searchlocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setdata(response.data)
        console.log(response.data)
      })
    }
  }


  return (
    <div className="App">
      <div className="search">
        <input 
        value={location}
        onChange={event}
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60ºF</h1>
          </div>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65ºF</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
