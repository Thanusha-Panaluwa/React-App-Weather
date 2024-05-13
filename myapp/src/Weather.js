import React, { useState}  from "react";
import './Weather.css';
import Search from "./Search";
import axios from 'axios';

export default function Weather(props) {
    const[weatherData, setweatherData] = useState({ready:false});

    function handleResponse(response){
        console.log(response.data);
        setweatherData({
            ready:true,
            temprature:response.data.main.temp,
            wind: response.data.wind.speed,
            city:response.data.name,
            description:response.data.weather[0].description,
            humidity:response.data.main.humidity,
            iconUrl:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/085/059/original/wind.png?1686385956",
            date:"Wednesday"
        });
        
       
      }
    if (weatherData.ready){
        return (
            <div className="weather">
              
                <center><Search /></center>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
                    </ul>
                    <div className="row">
                        <div className="col-6">
                            <div className="weather-icon">
                            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
                            <span className="temp">  {Math.round(weatherData.temprature)} </span> <span className="posi">
                                <a href="">&#8451; </a> | <a href="">&#8457;</a>
                                </span>
                                </div>
                                </div>
                               
             <div className="col-6 ">
                <div className="weather-details">
                <ul className="weather-details-list">
              
               <li>Humidity: <span className="humiidty">{weatherData.humidity}</span>% </li>
               <li>Wind: <span className="wind">{weatherData.wind}</span>km/h </li>
               </ul>
               </div>
             </div>
            </div>
            </div>
         
          );

    } else {
        const apiKey = "ebc5c2c8091706edf840091e9643782f";
      let apiUrl="https://api.openweathermap.org/data/2.5/weather?q=" + props.defaultcity + "&appid=" + apiKey;

    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";

    }
      
    
  
}