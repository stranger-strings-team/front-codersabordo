import styled from "styled-components";
import { GlobalStyles, theme } from '../../Global.style'

export const InputDiv = styled.div`
display: flex;
flex-direction: column;
margin-top:20px;
gap: 14px;
`
export const DarkText = styled.h3`
font-size: 0.6rem;
color: ${theme.darkText};
font-weight: 200;
`
export const Input = styled.input`
width: 200px;
height: 40px;
border-radius: 8px;
border: none;
background-color: ${theme.inputBackground};
`

