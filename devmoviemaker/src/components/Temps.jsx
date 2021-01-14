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
  InputTitle,
} from "../styled-components/Temps.js";

export default function Temps() {
  const [number, setNumber] = useState({
    flex1: 0,
    flex2: 0,
    flex3: 0,
    flex4: 0,
    flex5: 0,
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
          <InputTitle
            type="text"
            name="title1"
            placeholder="Accroche & présentation"
          />
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
                  max="120"
                  step="15"
                  onChange={handleNumberChange}
                />
              </DivLabel>
            </Formulaire>
          </Flex1>
        </ContainerFlex1>
        <ContainerFlex1>
          <InputTitle type="text" name="title1" placeholder="Mes formations" />
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
                  max="120"
                  step="15"
                  onChange={handleNumberChange}
                />
              </DivLabel>
            </Formulaire>
          </Flex2>
        </ContainerFlex1>
        <ContainerFlex1>
          <InputTitle type="text" name="title1" placeholder="Mes expériences" />
          <Flex3 number={number.flex3}>
            <Formulaire onSubmit={() => handleForm}>
              <DivLabel>
                <Label>Durée :</Label>
                <Input
                  type="number"
                  name="flex3"
                  id={number.flex3}
                  placeholder="0"
                  min="0"
                  max="120"
                  step="15"
                  onChange={handleNumberChange}
                />
              </DivLabel>
            </Formulaire>
          </Flex3>
        </ContainerFlex1>
      </FlexBox1>
      <FlexBox2>
        <ContainerFlex1>
          <InputTitle
            type="text"
            name="title1"
            placeholder="Mes centres d'intérêts"
          />
          <Flex4 number={number.flex4}>
            <Formulaire onSubmit={() => handleForm}>
              <DivLabel>
                <Label>Durée :</Label>
                <Input
                  type="number"
                  name="flex4"
                  id={number.flex4}
                  placeholder="0"
                  min="0"
                  max="120"
                  step="15"
                  onChange={handleNumberChange}
                />
              </DivLabel>
            </Formulaire>
          </Flex4>
        </ContainerFlex1>
        <ContainerFlex1>
          <InputTitle type="text" name="title1" placeholder="Pourquoi moi ?" />
          <Flex5 number={number.flex5}>
            <Formulaire onSubmit={() => handleForm}>
              <DivLabel>
                <Label>Durée :</Label>
                <Input
                  type="number"
                  name="flex5"
                  id={number.flex5}
                  placeholder="0"
                  min="0"
                  max="120"
                  step="15"
                  onChange={handleNumberChange}
                />
              </DivLabel>
            </Formulaire>
          </Flex5>
        </ContainerFlex1>
        <Flex6>Wesh thomas</Flex6>
      </FlexBox2>
    </Background>
  );
}
