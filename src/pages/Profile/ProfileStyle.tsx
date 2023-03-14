import styled from "styled-components";
import { GlobalStyles, theme } from '../../Global.style'

export const InputDiv = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
gap: 15px;
margin-top: 30px;
`

export const Nickname = styled.p `
font-weight: 700;
color: black;
margin-top: 20px;
`

export const Input = styled.input`
border: none;
background-color: ${theme.pinkBackground};
width: 200px;
height: 40px;
border-radius: 10px;
`

