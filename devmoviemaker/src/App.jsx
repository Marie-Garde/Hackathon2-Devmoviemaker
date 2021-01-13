import { Reset } from "styled-reset";
import VerticalLinearStepper from "./components/Stepper";
import Webcam from "./components/Webcam";

function App() {
  return (
    <div>
      <Reset />
      <VerticalLinearStepper/>
      <Webcam />
    </div>
  );
}

export default App;
