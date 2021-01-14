import styled from "styled-components";

export const ProgressBar=styled.div` 
    width: 90%;
    margin: 10px auto;
    height: 22px;
    background-color: #0A5F44;
  `;
  
  export const Bar=styled.div `
    height: 100%;
    text-align: right;
    //padding: 0 10px;
    line-height: 22px; /* same as #progressBar height if we want text middle aligned */
    width: ${props => props.progress+"%;" };
    background-color: #CBEA00;
    box-sizing: border-box;
  `;
  