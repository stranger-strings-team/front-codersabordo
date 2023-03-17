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

    h2 {
        color: ${theme.orange};
    }
`