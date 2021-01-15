import { useSelector } from "react-redux";

import {
  FlexBox,
  BebeFlex1,
  BebeFlex2,
  BebeFlex3,
  BebeFlex4,
  BebeFlex5,
  H2Flex,
  KeyWord,
} from "../styled-components/Prompteur";

export default function Prompteur() {
  const { word } = useSelector((state) => state.prompReducer);
  const { splitTime } = useSelector((state) => state.splitTimeReducer);
  const { ellapsed } = useSelector((state) => state.ellapsedReducer);
  console.log(splitTime[1]);
  console.log(ellapsed);
  return (
    <FlexBox>
      <BebeFlex1 color={parseInt(splitTime[0])} ellapsed={ellapsed}>
        <H2Flex>Présentation</H2Flex>
        <KeyWord>
          {word[0].map((key) => {
            return <li>{key}</li>;
          })}
        </KeyWord>
      </BebeFlex1>

      <BebeFlex2
        color1={parseInt(splitTime[0])}
        color2={parseInt(splitTime[0]) + parseInt(splitTime[1])}
        ellapsed={ellapsed}
      >
        <H2Flex>Mes informations</H2Flex>
        <KeyWord>
          {word[1].map((key) => {
            return <li>{key}</li>;
          })}
        </KeyWord>
      </BebeFlex2>
      <BebeFlex3
        color1={parseInt(splitTime[0]) + parseInt(splitTime[1])}
        color2={
          parseInt(splitTime[0]) +
          parseInt(splitTime[1]) +
          parseInt(splitTime[2])
        }
        ellapsed={ellapsed}
      >
        <H2Flex>Mes expériences</H2Flex>
        <KeyWord>
          {word[2].map((key) => {
            return <li>{key}</li>;
          })}
        </KeyWord>
      </BebeFlex3>
      <BebeFlex4
        color1={
          parseInt(splitTime[0]) +
          parseInt(splitTime[1]) +
          parseInt(splitTime[2])
        }
        color2={
          parseInt(splitTime[0]) +
          parseInt(splitTime[1]) +
          parseInt(splitTime[2]) +
          parseInt(splitTime[3])
        }
        ellapsed={ellapsed}
      >
        <H2Flex>Mes centres d'intérêts</H2Flex>
        <KeyWord>
          {word[3].map((key) => {
            return <li>{key}</li>;
          })}
        </KeyWord>
      </BebeFlex4>
      <BebeFlex5
        color1={
          parseInt(splitTime[0]) +
          parseInt(splitTime[1]) +
          parseInt(splitTime[2]) +
          parseInt(splitTime[3])
        }
        color2={
          parseInt(splitTime[0]) +
          parseInt(splitTime[1]) +
          parseInt(splitTime[2]) +
          parseInt(splitTime[3]) +
          parseInt(splitTime[4])
        }
        ellapsed={ellapsed}
      >
        <H2Flex>Pourquoi moi ?</H2Flex>
        <KeyWord>
          {word[4].map((key) => {
            return <li>{key}</li>;
          })}
        </KeyWord>
      </BebeFlex5>
    </FlexBox>
  );
}
