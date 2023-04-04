import styled from "styled-components";
import { GlobalStyles, theme } from '../../../Global.style'


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
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
    align-items: center;
    max-width: 100vw;
    position: relative
`


export const Padmin = styled.p`
    color: black;
    font-size: 0,5rem;
    font-weight: 20;
`

export const Padminname = styled(Padmin)`
    margin-left: 2px;
`

export const BinImg = styled.img`
    width: 1.6rem;
    cursor: pointer;
    margin-right: 2px;
`