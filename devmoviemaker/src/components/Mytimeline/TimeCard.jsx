import TimeLine from "./Time";
import React, { useState, useEffect } from 'react';


const TimeCard = () => {
  const [percent, setProgress] = useState(0);

useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percent + 0.8);
    }, 1000);
    return () => clearTimeout(timer);
  }, [percent]);

  return (
    <div>
    <div>
      <TimeLine width={400} percent={percent} />
      <button
        onClick={() => setProgress(percent + 0.8)}
      >
        Add 10%
      </button>
    </div>
  </div>
  )
}

export default TimeCard

  