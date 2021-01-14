import { Reset } from "styled-reset";
import Temps from "./components/Temps";
import PagePresentation from "./components/PagePresentation";
import VerticalLinearStepper from "./components/Stepper";
import Webcam from "./components/Webcam";
import Slider from "./components/Mycaroussel/Caroussel"
import TimeCard from "./components/Mytimeline/TimeCard"


function App() {
  return (
    <div>
      <Slider />  
      <Reset />
      <Temps />
      <VerticalLinearStepper/>
      <Webcam />
      <TimeCard />
    </div>
  );
}

export default App;
