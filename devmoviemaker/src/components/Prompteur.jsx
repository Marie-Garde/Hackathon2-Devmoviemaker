import {
  FlexBox,
  BebeFlex1,
  BebeFlex2,
  BebeFlex3,
  BebeFlex4,
  BebeFlex5,
  H2Flex
} from "../styled-components/Prompteur";

export default function Prompteur() {
  return (
    <FlexBox>
      <BebeFlex1>
        <H2Flex>Présentation</H2Flex>
      </BebeFlex1>
      <BebeFlex2>
        <H2Flex>Lorem Ipsum</H2Flex>
      </BebeFlex2>
      <BebeFlex3>
        <H2Flex>Lorel Ipsum</H2Flex>
      </BebeFlex3>
      <BebeFlex4>
        <H2Flex>Lorem Ipsum</H2Flex>
      </BebeFlex4>
      <BebeFlex5>
        <H2Flex>Lorem Ipsum</H2Flex>
      </BebeFlex5>
    </FlexBox>
  );
}
