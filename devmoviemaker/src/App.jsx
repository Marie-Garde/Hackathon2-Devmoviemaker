import { Reset } from "styled-reset";

import Temps from "./components/Temps";

import PagePresentation from "./components/PagePresentation";
import VerticalLinearStepper from "./components/Stepper";
import Webcam from "./components/Webcam";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { page } = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  const renderPage = () => {
    if (page === "home") {
      return <Webcam />;
    } else if (page === "advices") {
      return <Webcam />;
    } else if (page === "time") {
      return <Webcam />;
    } else if (page === "record") {
      return <Webcam />;
    } else {
      return <Webcam />;
    }
  };

  return (
    <div>
      <Reset />
      <Slider />
      <button onClick={() => dispatch({ type: "RECORD" })}>Mets ta cam!</button>
      <VerticalLinearStepper />
      <Webcam />
      <Temps />
      {renderPage()}
    </div>
  );
}

export default App;
