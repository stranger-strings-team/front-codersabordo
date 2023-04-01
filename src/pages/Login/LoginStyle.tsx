import styled from "styled-components";
import { theme } from '../../Global.style'


export const Button = styled.button`
    margin-top: 25px;
    width: 200px;
    padding: 0.3rem;
    border-radius: 40px;
    background-color: ${theme.orange};
    color: white;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
`

export const Input = styled.input`
    width: 200px;
    height: 40px;
    border-radius: 8px;
    padding: 0 1rem;
    background-color: #ffece4;
    color: black;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const P1p = styled.p`
    font-size: 0.6rem;
    color: blue;
    margin-top: 8px;
`

export const InputDiv = styled.div`
    display:flex;
    flex-direction: column;
    gap: 12px;
`

export const Myspan = styled.span`
    color: blue;
`

export const P2p = styled.p`
    font-size: 0.8rem;
    margin-top: 35px;
`
