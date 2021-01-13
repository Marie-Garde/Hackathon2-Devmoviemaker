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

export default function Temps(props) {
  const [number, setNumber] = useState(-1);

  function handleNumberChange(e) {
    setNumber(e.target.value);
    console.log(number);
  }

  return (
    <Background>
      <FlexBox1>
        <Flex1>
          <Formulaire>
            <DivLabel>
              <Label>Durée :</Label>
              <Input
                type="number"
                name="number"
                id={number}
                placeholder="0"
                value={number}
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
