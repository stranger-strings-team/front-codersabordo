import styled from "styled-components";
import { theme } from '../../Global.style'

export const Div = styled.div`
	display: flex;
	flex-direction: column;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
`

export const Input = styled.input`
    background-color: #ffe6dc;
    color: black;
    border-style: none;
    border-radius: 10px;
    height: 35px;
    width: 200px;
    padding: 10px;
`

export const Select = styled.select`
    background-color: #ffe6dc;
    border-style: none;
    color: gray;
    height: 35px;
    width: 200px;
    padding: 10px;
    border-radius: 10px;
`
