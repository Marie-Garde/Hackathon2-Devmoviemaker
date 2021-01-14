import { Reset } from "styled-reset";
import Temps from "./components/Temps";
import PagePresentation from "./components/PagePresentation";
import Caroussel from "./components/Mycaroussel/Caroussel";
import VerticalLinearStepper from "./components/Stepper";
import Webcam from "./components/Webcam";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { page } = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  const renderPage = () => {
    if (page === "home") {
      return <PagePresentation />;
    } else if (page === "advices") {
      return <Caroussel />;
    } else if (page === "time") {
      return <Temps />;
    } else if (page === "record") {
      return <Webcam />;
    } else {
      return <p>something bad happened</p>;
    }
  };

  return (
    <div>
      <Reset />
      <VerticalLinearStepper />
      {renderPage()}
    </div>
  );
}

export default App;
