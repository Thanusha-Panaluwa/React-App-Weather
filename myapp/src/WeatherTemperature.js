import React, {useState} from "react";


export default function WeatherTemperature(props){
    const [unit, setUnit] = useState("celsius");

    function convertToFarenhite(event){
        event.preventDefault();
        setUnit("fahrenheit");

    }
    if (unit === "celsius"){
        return(
            <div className="WeatherTemperature">
    
            <span className="temp">  {Math.round(props.temp)} </span> <span className="posi">
                            <a href="">&#8451; </a> | <a href="/" onClick={convertToFarenhite}>&#8457;</a>
                            </span>
                            </div>
    
        );

    }else {
        return "F";
    }
    
}


