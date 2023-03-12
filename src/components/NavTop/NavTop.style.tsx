import styled from 'styled-components'
import { theme } from '../../Global.style'

export const StyledNavTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 80px;
    background-color: rgba(255, 163, 127, 0.36);
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        color: ${theme.orange};
    }
`