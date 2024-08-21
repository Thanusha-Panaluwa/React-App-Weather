import "./WeatherForecast.css";
import React, { useState }  from "react";
import Axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let [forecast, setForecast] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
      
    if (loaded){
        console.log(forecast);
        return(  
        <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index){
                if(index <6){
                    return(
                        <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast} />  
              
                        </div>

                    );
                }
            })}
         
      </div>
      </div>
        );
    }else{
        const apiKey = "d3e48bf033atf207aaaofb4545b2099f";
        let lon= 115.857; 
        let lat= -31.953;
        /*console.log(lon);
        let lon= props.cord.lon; 
        let lat= props.cord.lat;
        let city= perth; 
        let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ long +"&appid="+ apiKey; 
        let apiUrl = "https://api.shecodes.io/weather/v1/forecast?query=" + city + "&key=" + apiKey; */

        let apiUrl ="https://api.shecodes.io/weather/v1/forecast?lon=" + lon + "&lat=" + lat + "&key=" + apiKey;

        
        Axios.get(apiUrl).then(handleResponse);

        return null;

    }
    
}