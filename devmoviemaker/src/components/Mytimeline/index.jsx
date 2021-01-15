import { useEffect, useState } from "react";
import { ProgressBar, Bar } from "../../styled-components/Bar";
import { useDispatch } from "react-redux";

export default function Progress({ timeleft, timetotal, e, time }) {
  const [timeEllapsed, setTimeEllapsed] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "ELLAPSED", myEllapsed: timeEllapsed });
  }, [timeEllapsed]);

  useEffect(() => {
    setTimeout(() => {
      setTimeEllapsed(timeEllapsed + 1);
    }, 1000);
  }, [timeEllapsed]);

  const [progressPercentage, setProgressPercentage] = useState(100);
  useEffect(() => {
    const percentage = (timeEllapsed / time) * 100;
    const value = Math.ceil(Math.min(percentage, 100));
    setProgressPercentage(value);
  }, [timeEllapsed]);

  return (
    <ProgressBar id="progressBar">
      <Bar progress={progressPercentage}>{progressPercentage}%</Bar>
    </ProgressBar>
  );
}

//Progress(600, 600, ('#progressBar'));
