import {useEffect, useState} from 'react';
import { ProgressBar, Bar} from "../../styled-components/Bar"


export default function Progress({timeleft, timetotal, e}) {
    
    /*
    const progressBarWidth = timeleft * e.width() / timetotal;
    e.find('div').animate({ width: progressBarWidth }, 500).html(Math.floor(timeleft/60) + ":"+ timeleft%60);
    if(timeleft > 0) {
        setTimeout(function() {
            Progress(timeleft - 1, timetotal, e);
        }, 1000);
    }*/

    const [timeEllapsed, setTimeEllapsed] = useState(0);
    useEffect( ()=>{
        setTimeout(()=>{
            setTimeEllapsed(timeEllapsed+1)
        }, 1000);
    }, [timeEllapsed] )

    const [progressPercentage, setProgressPercentage] = useState(100);
    useEffect(() => {
        const percentage = (timeEllapsed/timetotal)*100;
        const value = Math.min(Math.ceil(percentage, 100));
        setProgressPercentage(value);
    }, [timeEllapsed])


    return (
        <ProgressBar id="progressBar" >
            <Bar progress={progressPercentage}>{progressPercentage}%</Bar>
        </ProgressBar>
    )
};

//Progress(600, 600, ('#progressBar'));