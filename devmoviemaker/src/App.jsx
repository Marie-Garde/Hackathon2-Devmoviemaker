import { Reset } from "styled-reset";
import VerticalLinearStepper from "./components/Stepper";
import Webcam from "./components/Webcam";
import Slider from "./components/Mycaroussel/Caroussel"

function App() {
  return (
    <div>
      <Reset />
      <VerticalLinearStepper/>
      <Webcam />
      <Slider />
    </div>
  );
}

export default App;
