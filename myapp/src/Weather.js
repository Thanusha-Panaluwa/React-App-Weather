import React from "react";
import './Weather.css';
import Search from "./Search";

export default function Weather() {
  return (
    <div className="weather">
        <Search />
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mosrly Cloudy</li>
            </ul>
            <div className="row">
                <div className="clo-6 weather-icon">
                    <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/059/original/wind.png?1686385956" alt="weather"></img>
<span className="temp">  6 </span><a href="">&#8451; </a> | <a href="">&#8457;</a>
        </div>
</div>
     <div className="weather-details">
       Precitipitation:<span className="precipi">15</span>%
       Humidity: <span className="humiidty">72</span>%
       Wind: <span className="wind">13</span>km/h
     </div>
    </div>
  );
}