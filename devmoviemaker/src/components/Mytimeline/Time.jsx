import React, { useState, useEffect } from "react";
import {
  ProgressComp,
  PercentNumber,
  ProgressDiv,
  Progress,
} from "../../styled-components/Time";

const TimeLine = ({ width, percent, status }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percent * width);
  });

  return (
    <ProgressComp>
      <PercentNumber>{status}</PercentNumber>
      <ProgressDiv style={{ width: width }}>
        <Progress style={{ width: `${value}px` }} />
      </ProgressDiv>
    </ProgressComp>
  );
};

export default TimeLine;
