import React from "react";
import "./WeatherForecastDay.css";

export default function weatherForecastDay(props){

   function day() {
      let date = new Date(props.data.time * 1000);
      let day = date.getDay();
  
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
      return days[day];
    }
   
   
   return (
     
    <div className="WeatherDay">
    <div className="WeatherForecast-day">{day()}</div>  
    {/* <WeatherIcon sendIcon="50d" size="36"/> */}
    {/*<img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" alt="icon"/>*/}
    <img src={props.data.condition.icon_url} alt="icon"/>
    
      <div className="WeatherForecast-temperatures"> 
   <span className="WeatherForecast-temperature-max">{Math.round(props.data.temperature.maximum)}&#176;</span>
   <span className="WeatherForecast-temperature-min">{Math.round(props.data.temperature.minimum)}&#176;</span>
  
  </div>
  </div>

   );
}