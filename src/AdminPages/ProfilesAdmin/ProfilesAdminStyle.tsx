import styled from "styled-components";
import { GlobalStyles, theme } from '../../Global.style'


export const YellowDiv = styled.div`
    display: grid;
    grid-column: 2;
    gap: 15px; 
`

export const Container = styled.button`
    margin-bottom: 10px;
`

export const ProfileAdminDiv = styled.div`
    margin-top: 10px;
    width:100%;
    background-color: ${theme.yellowBackground};
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr 1fr; 
    padding: 6px;
    border-radius: 8px;
    align-items: center;
    max-width: 100vw;
`

export const Padmin = styled.p`
    color: black;
    font-size: 0,5rem;
    font-weight: 20;
`

export const BinImg = styled.img`
    width: 1.6rem;
    margin-top: 8px;
    cursor: pointer;
`