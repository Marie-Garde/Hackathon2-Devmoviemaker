import styled from "styled-components";

export const Background = styled.div `
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1060%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='%230e2a47'%3e%3c/rect%3e%3cpath d='M892.7727263362449 974.9974867988266L1025.9946544316251 1260.6928335629957 1178.4680731004141 841.7755587034463z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M905.22 253.34 a235.24 235.24 0 1 0 470.48 0 a235.24 235.24 0 1 0 -470.48 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M861.42 707.51 a346.27 346.27 0 1 0 692.54 0 a346.27 346.27 0 1 0 -692.54 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M173.59128460337058 977.7564395239931L258.5257558055438 1113.6800064946733 419.9438706604775 918.3165162060734z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M77.62843406637941 746.9709864909061L329.2754111419391 486.8794182452499 23.694930044784968 404.9993751125536z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M632.9 588.93 a299.47 299.47 0 1 0 598.94 0 a299.47 299.47 0 1 0 -598.94 0z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1051.9017687068463 686.6786565241395L838.0187072398328 519.5748948467091 670.9149455624024 733.4579563137225 884.7980070294159 900.5617179911529z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M887.5916874799436 98.90339540791172L779.3615489815884-156.07083242687062 524.387321146806-47.84069392851535 632.6174596451613 207.13353390626696z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1060'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
`;

export const TotalPage = styled.div `
  display: flex;
`;

export const Main = styled.div `
  color: white;
  padding-left: 29vw;
  padding-top : 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  video {
    border-radius: 0.5em;
    width: 50vw;
  }

  img {
    border-radius: 0.5em;
    width: 40vw;
  }

  button {
    display: inline-block;
    padding: 0.7em 2em;
    margin: 0.5em 0.8em;
    border-radius: 0.2em;
    border-style: none;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: #ffffff;
    background-color: #3369ff;
    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    text-align: center;
    &:hover {
      transform: scale(1.1);
    }
    &:focus {
      background: rgba(0, 0, 0, 0.4);
    }
  }
`;