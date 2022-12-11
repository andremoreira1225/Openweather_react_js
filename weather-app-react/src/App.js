import React, {useState} from "react";
import axios from "axios";

function App() {

  const [data,setdata] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=86abd2e7547e6871dd05c8d415363346`
  
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
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchlocation}
        type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}ºC</h1> : null}
          </div>
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p>{data.main.feels_like}ºC</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.weather ? <p>{data.wind.speed}m/s</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
