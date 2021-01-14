import TimeLine from "./Time";
import React, { useState } from 'react';


const TimeCard = () => {
  const [percent, setProgress] = useState(0);

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




  