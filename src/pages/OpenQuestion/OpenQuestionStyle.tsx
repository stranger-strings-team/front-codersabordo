import styled from "styled-components";
import { GlobalStyles, theme } from '../../Global.style'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputQuestion = styled.input`
    border-radius: 8px;
    background-color: ${theme.blueBackground};
    border: none;
    display: flex;
    width:70vw;
    height: 200px;
    margin: 20px auto;
`