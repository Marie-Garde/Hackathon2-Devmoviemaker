import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  video {
    border-radius: 0.5em;
    width: 30vw;
  }

  img {
    border-radius: 0.5em;
    width: 30vw;
  }

  button {
    display: inline-block;
    padding: 0.7em 2em;
    margin: 0.2em 0.5em;
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
  }
`;
