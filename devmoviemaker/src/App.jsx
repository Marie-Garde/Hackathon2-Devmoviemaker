import { Reset } from "styled-reset";
import PagePresentation from "./components/PagePresentation";
import VerticalLinearStepper from "./components/Stepper";
import Webcam from "./components/Webcam";
import Slider from "./components/Mycaroussel/Caroussel"

function App() {
  return (
    <div>
      <PagePresentation/>
      <Reset />
      <VerticalLinearStepper/>
      <Webcam />
      <Slider />
    </div>
  );
}

export default App;
