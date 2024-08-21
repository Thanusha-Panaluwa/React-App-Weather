import React, {useState} from "react";
import "./index.css";


export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

    function convertToFarenhite(event){
        event.preventDefault();
        setUnit("fahrenheit");

    }

    function convertToCelsius(event){
        event.preventDefault();
        setUnit("Celsius");

    }


    if (unit === "celsius"){
        return(
            <div className="WeatherTemperature">
    
            <span className="temp"> {Math.round(props.temp)}</span>
             <span className="posi">
                            <a href="">&#8451;  </a> | <a href="/" onClick={convertToFarenhite}><span className="unit">&#8457;</span></a>
                            </span>
                            </div>
    
        );

    }else {
        let fahrenheit = (props.temp * 9) / 5 + 32;
        return (
        <div className="WeatherTemperature">
            <span className="temp"> {Math.round(fahrenheit)}</span>
            <span className="posi">
                        <a href="">&#8451;  </a> | <a href="/" onClick={convertToCelsius}><span className="unit"> &#8457; </span></a>
                        </span>
                        </div>

    );
    }
    
}


