import styled from "styled-components";
import { GlobalStyles, theme } from '../../../Global.style'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputWrapper = styled.textarea`
    border-radius: 8px;
    background-color: ${theme.inputBackground};
    border: none;
    display: flex;
    width:70vw;
    height: 200px;
    margin: 20px auto;
    padding: 10px;
`

