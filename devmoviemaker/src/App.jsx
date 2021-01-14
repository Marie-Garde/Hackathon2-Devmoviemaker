import { Reset } from "styled-reset";

import Temps from "./components/Temps";

import PagePresentation from "./components/PagePresentation";
import VerticalLinearStepper from "./components/Stepper";
import Webcam from "./components/Webcam";
import Slider from "./components/Mycaroussel/Caroussel";

function App() {
  return (
    <div>
      <Reset />
      <VerticalLinearStepper />
      <Temps />
    </div>
  );
}

export default App;
