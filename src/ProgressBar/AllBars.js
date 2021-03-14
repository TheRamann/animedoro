import React, { useState } from 'react'
import ProgressBar from './ProgressBar';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function AllBars() {
    const [currentBar, NextBar] = useState(<ProgressBar />)
    function minuteValue() {
        var startingMinutes = 0;
        return setInterval(() => {
            startingMinutes = startingMinutes + 0.5;
            return ((startingMinutes/40) * 100)
        }, 30000);
    }
    const someotherBar = (<div>
        <LinearProgress variant="determinate" value={minuteValue()} color="secondary" />
    </div>
    )
    document.getElementById("startButton").addEventListener("click", function() {
        NextBar(someotherBar)
      });
    return (
        <div>
            {currentBar}
        </div>
    )
}