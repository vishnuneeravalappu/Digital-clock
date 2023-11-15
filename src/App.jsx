import React from "react";
import "./style.css";
import { TimeCard } from "./components/components-time-box/time-card";
import {TimeSeperator, Meridium} from './components/components-time-box/time-card-accessories';

const App = () =>{
    const [dateTime, setDateTime] = React.useState({
                hours: "",
                minutes: "",
                seconds: "",
            });
    React.useEffect(()=>{
        setInterval(()=>{
            let time = new Date;
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let seconds = time.getSeconds();
            setDateTime({
                hour: hours>=10 ? hours.toString() : hours.toString().padStart(2, "0"),
                minute: minutes>=10 ? minutes.toString() : minutes.toString().padStart(2, "0"),
                second: seconds>=10 ? seconds.toString() : seconds.toString().padStart(2, "0"),
            })
        }, 1000)
    },[])
    return (
        <div className="clock-container">
            <TimeCard time={dateTime.hour}/>
            <TimeSeperator/>
            <TimeCard time={dateTime.minute}/>
            <TimeSeperator/>
            <TimeCard time={dateTime.second}/>
        </div>
    )
}

export default App
