import styled from "styled-components";

export const ProgressBar=styled.div` 
    width: 80vh;
    margin: 10px auto;
    height: 22px;
    background-color: #49A7C4;
  `;
  
  export const Bar=styled.div `
    height: 100%;
    text-align: center;
    line-height: 22px; /* same as #progressBar height if we want text middle aligned */
    width: ${props => props.progress+"%;" };
    background-color: #2E6A7D;
    box-sizing: border-box;
  `;
  