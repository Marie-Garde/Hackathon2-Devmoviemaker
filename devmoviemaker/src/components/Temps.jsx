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
  ContainerFlex1,
  Formulaire,
  DivLabel,
  Label,
  Input,
} from "../styled-components/Temps.js";

export default function Temps() {
  const [number, setNumber] = useState({
    flex1: 0,
    flex2: 0,
    flex3: 0,
  });
  console.log(number);
  const handleNumberChange = (e) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <Background>
      <FlexBox1>
        <ContainerFlex1>
          <Flex1 number={number.flex1}>
            <Formulaire onSubmit={() => handleForm}>
              <DivLabel>
                <Label>Durée :</Label>
                <Input
                  type="number"
                  name="flex1"
                  id={number.flex1}
                  placeholder="0"
                  min="0"
                  max="150"
                  step="15"
                  onChange={handleNumberChange}
                />
              </DivLabel>
            </Formulaire>
          </Flex1>
        </ContainerFlex1>
        <ContainerFlex1>
          <Flex2 number={number.flex2}>
            <Formulaire onSubmit={() => handleForm}>
              <DivLabel>
                <Label>Durée :</Label>
                <Input
                  type="number"
                  name="flex2"
                  id={number.flex2}
                  placeholder="0"
                  min="0"
                  max="150"
                  step="15"
                  onChange={handleNumberChange}
                />
              </DivLabel>
            </Formulaire>
          </Flex2>
        </ContainerFlex1>
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
