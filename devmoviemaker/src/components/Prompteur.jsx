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

  return (
    <FlexBox>
      <BebeFlex1>
        <H2Flex>Présentation</H2Flex>
        <KeyWord>
          {word[0].map((key) => {
            return key;
          })}
        </KeyWord>
      </BebeFlex1>
      <BebeFlex2>
        <H2Flex>Lorem Ipsum</H2Flex>
        <KeyWord>
          {word[1].map((key) => {
            return key;
          })}
        </KeyWord>
      </BebeFlex2>
      <BebeFlex3>
        <H2Flex>Lorel Ipsum</H2Flex>
        <KeyWord>
          {word[2].map((key) => {
            return key;
          })}
        </KeyWord>
      </BebeFlex3>
      <BebeFlex4>
        <H2Flex>Lorem Ipsum</H2Flex>
        <KeyWord>
          {word[3].map((key) => {
            return key;
          })}
        </KeyWord>
      </BebeFlex4>
      <BebeFlex5>
        <H2Flex>Lorem Ipsum</H2Flex>
        <KeyWord>
          {word[4].map((key) => {
            return key;
          })}
        </KeyWord>
      </BebeFlex5>
    </FlexBox>
  );
}
