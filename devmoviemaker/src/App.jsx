import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Reset } from "styled-reset";
import Webcam from "./components/Webcam";

function App() {
  return (
    <div>
      <Reset />
      <Webcam />
    </div>
  );
}

export default App;
