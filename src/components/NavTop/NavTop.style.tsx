import styled from 'styled-components'
import { theme } from '../../Global.style'

export const StyledNavTop = styled.div`
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 80px;
    background-color: ${theme.pinkBackground};
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 2.7rem;
    }

`

export const H2 = styled.h2`
    font-size: 1.5rem;
    display: inline;
    font-weight: 700;
    margin: 0px auto;
    padding: 0;
    text-decoration: none;
    line-height: 1.5;
`