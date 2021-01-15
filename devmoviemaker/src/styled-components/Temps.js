import styled from "styled-components";

export const Background = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1060%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M892.7727263362449 974.9974867988266L1025.9946544316251 1260.6928335629957 1178.4680731004141 841.7755587034463z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M905.22 253.34 a235.24 235.24 0 1 0 470.48 0 a235.24 235.24 0 1 0 -470.48 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M861.42 707.51 a346.27 346.27 0 1 0 692.54 0 a346.27 346.27 0 1 0 -692.54 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M173.59128460337058 977.7564395239931L258.5257558055438 1113.6800064946733 419.9438706604775 918.3165162060734z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M77.62843406637941 746.9709864909061L329.2754111419391 486.8794182452499 23.694930044784968 404.9993751125536z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M632.9 588.93 a299.47 299.47 0 1 0 598.94 0 a299.47 299.47 0 1 0 -598.94 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1051.9017687068463 686.6786565241395L838.0187072398328 519.5748948467091 670.9149455624024 733.4579563137225 884.7980070294159 900.5617179911529z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M887.5916874799436 98.90339540791172L779.3615489815884-156.07083242687062 524.387321146806-47.84069392851535 632.6174596451613 207.13353390626696z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1060'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
  width: 100vw;
  height: 100vh;
`;

export const FlexBox1 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 5vh;
  padding-top: 7vh;
  margin-left: 38vh;
`;

export const FlexBox2 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 38vh;
`;

export const ContainerFlex1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.4%;
  height: 40vh;
  background-color: #4575a6;
  border-radius: 15px;
  -webkit-box-shadow: 0px 7px 28px -6px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 7px 28px -6px rgba(0, 0, 0, 1);
  box-shadow: 0px 7px 28px -6px rgba(0, 0, 0, 1);
`;

export const Flex1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8daccc;
  width: ${(id) => (id.number.flex1 !== 0 ? 0 + id.number * 2.28 : 0)}px;
  height: 100%;
  border-radius: 0 0 15px 15px;
  padding-top: 2vh;
`;

export const Flex2 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8daccc;
  width: ${(id) => (id.number.flex2 !== 0 ? 0 + id.number * 2.28 : 0)}px;
  height: 100%;
  border-radius: 0 0 15px 15px;
  padding-top: 2vh;
`;

export const Flex3 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8daccc;
  width: ${(id) => (id.number.flex3 !== 0 ? 0 + id.number * 2.28 : 0)}px;
  height: 100%;
  border-radius: 0 0 15px 15px;
  padding-top: 2vh;
`;

export const Flex4 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8daccc;
  width: ${(id) => (id.number.flex4 !== 0 ? 0 + id.number * 2.28 : 0)}px;
  height: 100%;
  border-radius: 0 0 15px 15px;
  padding-top: 2vh;
`;

export const Flex5 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8daccc;
  width: ${(id) => (id.number.flex5 !== 0 ? 0 + id.number * 2.28 : 0)}px;
  height: 100%;
  border-radius: 0 0 15px 15px;
  padding-top: 2vh;
`;

export const Flex6 = styled.div`
  display: flex;
  width: 22.4%;
  height: 40vh;
`;

export const Formulaire = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Formulaire2 = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const DivLabel = styled.div`
  padding-top: 1vh;
  width: 18vw;
  height: 7vh;
  text-align: center;
`;

export const Label = styled.h1`
  font-size: 1.1rem;
  width: 100%;
  font-family: "Rambla";
  color: white;
  padding-bottom : 1vh;
`;

export const Input = styled.input`
  width: 40%;
  text-align: center;
  line-height: 1.65;
  border: 1px solid #eee;
  background-color: rgba( 225, 231, 243, 0.5 );
  border: transparent;
 input&{
 }   
`;

export const InputTitle = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-family: "Capriola";
  background-color: transparent;
  border-bottom: 1px solid #070645;
  margin-top: 1vh;
  font-size: 1.3rem;
  text-align: center;
  color: white;
  padding-bottom: 1vh;
  font-weight: bold;
`;

export const Li = styled.li`
padding-top : 0.5vh;  
list-style-type: square;
  width: 10vw;
  list-style: none;
  font-family: "Rambla";
  padding-left: 1.4vw;
  color : white;
  font-size : 1.2rem;
  
`;
