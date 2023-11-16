import React from "react";
import "./style.css";
import { TimeCard } from "./components/components-time-box/time-card";
import {TimeSeperator, Meridium} from './components/components-time-box/time-card-accessories';

const App = () =>{
    let time = new Date;
    const [dateTime, setDateTime] = React.useState({
                hours: "",
                minutes: "",
                seconds: "",
            });
    React.useEffect(()=>{
        setTimeout(()=>{
            let time = new Date;
            let hours = time.getHours();
            let minutes = time.getMinutes();
            let seconds = time.getSeconds();
            setDateTime({
                hour: hours.toString().padStart(2, "0"),
                minute: minutes.toString().padStart(2, "0"),
                second: seconds.toString().padStart(2, "0"),
            })
        }, 500)
    },[time])
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
