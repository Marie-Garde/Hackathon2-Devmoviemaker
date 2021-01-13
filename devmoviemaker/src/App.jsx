import { Reset } from "styled-reset";
import PagePresentation from "./components/PagePresentation";
import VerticalLinearStepper from "./components/Stepper";
import Webcam from "./components/Webcam";

function App() {
  return (
    <div>
      <PagePresentation/>
      <Reset />
      <VerticalLinearStepper/>
      <Webcam />
    </div>
  );
}

export default App;
