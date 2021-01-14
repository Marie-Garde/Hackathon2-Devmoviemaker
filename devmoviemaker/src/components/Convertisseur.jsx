import React, { useEffect, useState } from "react";

import { Label, P, Border } from "../styled-components/Convertisseur";

export default function Convert({ totalTime }) {
  const [seconde, setSeconde] = useState(0);
  const [minute, setMinute] = useState(0);

  useEffect(() => {
    setMinute(Math.floor(totalTime / 60));
  }, [totalTime]);

  return (
    <Border>
      <Label>Temps de votre présentation :</Label>
      <P>
        {" "}
        {minute} min(s) et {totalTime % 60} seconde(s)
      </P>
    </Border>
  );
}
