import styled from "styled-components";
import { GlobalStyles, theme } from '../../Global.style'

export const InputDiv = styled.div`
display: flex;
flex-direction: column;
margin-top:14px;
margin-bottom: 12px;
gap: 14px;
`

export const Input = styled.input`
width: 200px;
height: 40px;
border-radius: 8px;
border: none;
background-color: ${theme.inputBackground};

`

export const P3p = styled.p`
color: blue;
font-size: 0.8rem;  
margin-top: 10px; 
margin-bottom: 18px; 
`


