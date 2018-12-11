import React from 'react';
import './App.css';

const timebyms = ms => {
    const msPerSecond = 1000
    const msPerMinute = msPerSecond * 60
    const msPerHour = msPerMinute * 60

    const hours = Math.floor(ms / msPerHour)
    const hoursRest = ms % msPerHour
    const minutes = Math.floor(hoursRest / msPerMinute)
    const minutesRest = hoursRest % msPerMinute
    const seconds = Math.floor(minutesRest / msPerSecond)
    return String(hours).padStart(2, '0') +
    ':' + String(minutes).padStart(2, '0') +
    ':' + String(seconds).padStart(2, '0')
}


    
 const Timer=({ms}) =>{

 
 return(
<div className="dynamic-timer">
<div className="timer-compo">
<div className="timer-dynamic" > 

  {timebyms(ms)}
</div>
<div className="timer-component">
<div className="hour-component">Hour</div>
<div className="minute-component">Minute</div>
<div className="second-component">Second</div>
</div>

</div>
</div>
 )
}
export default Timer;
