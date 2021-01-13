import { Reset } from "styled-reset";
import PagePresentation from "./components/PagePresentation";
import VerticalLinearStepper from "./components/Stepper";
import Webcam from "./components/Webcam";
import Slider from "./components/Mycaroussel/Caroussel"

function App() {
  return (
    <div>
      <Slider />  
      <Reset />
      <VerticalLinearStepper/>
      <Webcam />
    </div>
  );
}

export default App;
