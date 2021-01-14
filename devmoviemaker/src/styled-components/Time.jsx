import styled from "styled-components";

export const ProgressDiv=styled.div`
    border-radius: .4rem;
    `;

export const Progress=styled.div`
    background-color: rgb(24, 66, 204);
    background: linear-gradient(
      90deg,
      rgba(24, 66, 204, 1) 0%,
      rgba(24, 66, 204, 0.6264880952380952) 52%,
      rgba(24, 66, 204, 0.4332107843137255) 100%
    );
  
    height: 10px;
    transition: 0.5s ease;
    transition-delay: 0.2s;
    border-radius: 0.4rem;
    margin: 0; 
`;

export const ProgressComp=styled.div`
    font-size: 10px;
    background-color: rgb(233, 233, 233);
`;

export const PercentNumber=styled.h1`
    color: rgb(121, 121, 121);
`;
