import React, { useState } from "react";

import {
  Background,
  FlexBox1,
  FlexBox2,
  Flex1,
  Flex2,
  Flex3,
  Flex4,
  Flex5,
  Flex6,
  Formulaire,
  DivLabel,
  Label,
  Input,
} from "../styled-components/Temps.js";

export default function Temps() {
  const [number, setNumber] = useState(0);
  console.log(number);
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <Background>
      <FlexBox1>
        <Flex1 number={number}>
          <Formulaire onSubmit={() => handleForm}>
            <DivLabel>
              <Label>Durée :</Label>
              <Input
                type="number"
                name="number"
                id={number}
                placeholder="0"
                min="0"
                max="150"
                step="15"
                onChange={handleNumberChange}
              />
            </DivLabel>
          </Formulaire>
        </Flex1>
        <Flex2></Flex2>
        <Flex3></Flex3>
      </FlexBox1>
      <FlexBox2>
        <Flex4></Flex4>
        <Flex5></Flex5>
        <Flex6>Wesh thomas</Flex6>
      </FlexBox2>
    </Background>
  );
}
