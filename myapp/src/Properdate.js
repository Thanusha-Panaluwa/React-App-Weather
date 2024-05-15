import React from "react";

export default function Properdate(props){
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satureday"];
    let time = "AM";
    let day= days[props.date.getDay()];
    let hours = props.date.getHours();
    if(hours<10) {
        hours= "0" + hours ;
    }

    let minutes=props.date.getMinutes();
    if (minutes<10){
        minutes= "0" + minutes ;
    }

    if (hours<12){
        time = "AM";
    }else{
         time="PM";
    }

    return (
        <div>
            {day} {hours}:{minutes} {time}

        </div>
    );

}