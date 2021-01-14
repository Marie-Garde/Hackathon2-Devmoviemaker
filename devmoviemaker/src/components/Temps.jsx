import { useState, useEffect } from "react";
import Convert from "./Convertisseur";
import { useDispatch } from "react-redux";

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
  Formulaire2,
  DivLabel,
  Label,
  Input,
  InputTitle,
  Li,
} from "../styled-components/Temps.js";

export default function Temps() {
  const dispatch = useDispatch();

  const [number, setNumber] = useState({
    flex1: 0,
    flex2: 0,
    flex3: 0,
    flex4: 0,
    flex5: 0,
  });

  const [text, setText] = useState({
    textflex1: "",
    array1: [],
    textflex2: "",
    array2: [],
    textflex3: "",
    array3: [],
    textflex4: "",
    array4: [],
    textflex5: "",
    array5: [],
  });

  const handleNumberChange = (e) => {
    setNumber({ ...number, [e.target.name]: e.target.value });
  };

  const handleTextChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    text.array1.push(text.textflex1);
    setText({ ...text, textflex1: "" });
    console.log(text.array1);
  };

  const handleTextSubmit2 = (e) => {
    e.preventDefault();
    text.array2.push(text.textflex2);
    setText({ ...text, textflex2: "" });
    console.log(text.array2);
  };

  const handleTextSubmit3 = (e) => {
    e.preventDefault();
    text.array3.push(text.textflex3);
    setText({ ...text, textflex3: "" });
    console.log(text.array3);
  };

  const handleTextSubmit4 = (e) => {
    e.preventDefault();
    text.array4.push(text.textflex4);
    setText({ ...text, textflex4: "" });
    console.log(text.array4);
  };

  const handleTextSubmit5 = (e) => {
    e.preventDefault();
    text.array5.push(text.textflex5);
    setText({ ...text, textflex5: "" });
    console.log(text.array5);
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  const totalTime =
    parseInt(number.flex1) +
    parseInt(number.flex2) +
    parseInt(number.flex3) +
    parseInt(number.flex4) +
    parseInt(number.flex5);

  useEffect(() => {
    dispatch({ type: "TIME", myTime: totalTime });
  }, [totalTime]);
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
            <Formulaire2 onSubmit={handleTextSubmit}>
              <DivLabel>
                <Label>Mots clefs :</Label>
                <Input
                  type="text"
                  name="textflex1"
                  id={text.flex1}
                  placeholder="mots clefs"
                  value={text.textflex1}
                  onChange={handleTextChange}
                />
              </DivLabel>
              <ul>
                {text.array1.map((item) => (
                  <Li>{item}</Li>
                ))}
              </ul>
            </Formulaire2>
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
            <Formulaire2 onSubmit={handleTextSubmit2}>
              <DivLabel>
                <Label>Mots clefs :</Label>
                <Input
                  type="text"
                  name="textflex2"
                  id={text.flex2}
                  placeholder="mots clefs"
                  value={text.textflex2}
                  onChange={handleTextChange}
                />
              </DivLabel>
              <ul>
                {text.array2.map((item) => (
                  <Li>{item}</Li>
                ))}
              </ul>
            </Formulaire2>
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
            <Formulaire2 onSubmit={handleTextSubmit3}>
              <DivLabel>
                <Label>Mots clefs :</Label>
                <Input
                  type="text"
                  name="textflex3"
                  id={text.flex3}
                  placeholder="mots clefs"
                  value={text.textflex3}
                  onChange={handleTextChange}
                />
              </DivLabel>
              <ul>
                {text.array3.map((item) => (
                  <Li>{item}</Li>
                ))}
              </ul>
            </Formulaire2>
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
            <Formulaire2 onSubmit={handleTextSubmit4}>
              <DivLabel>
                <Label>Mots clefs :</Label>
                <Input
                  type="text"
                  name="textflex4"
                  id={text.flex4}
                  placeholder="mots clefs"
                  value={text.textflex4}
                  onChange={handleTextChange}
                />
              </DivLabel>
              <ul>
                {text.array4.map((item) => (
                  <Li>{item}</Li>
                ))}
              </ul>
            </Formulaire2>
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
            <Formulaire2 onSubmit={handleTextSubmit5}>
              <DivLabel>
                <Label>Mots clefs :</Label>
                <Input
                  type="text"
                  name="textflex5"
                  id={text.flex5}
                  placeholder="mots clefs"
                  value={text.textflex5}
                  onChange={handleTextChange}
                />
              </DivLabel>
              <ul>
                {text.array5.map((item) => (
                  <Li>{item}</Li>
                ))}
              </ul>
            </Formulaire2>
          </Flex5>
        </ContainerFlex1>
        <Flex6>
          <Convert totalTime={totalTime} />
        </Flex6>
      </FlexBox2>
    </Background>
  );
}
