import styled from "styled-components";
import { GlobalStyles, theme } from '../../Global.style'
import { Link } from "react-router-dom";


export const DarkText = styled.h3`
 font-size: 0.6rem;
 color: ${theme.darkText};
 font-weight: 200;
`

export const StyledLink = styled(Link)`
    margin: 0 1em 1em 1em;
    color: ${theme.darkText};
    background-color: ${theme.blueBackground};
    padding: 1rem;
    border-radius: 10px;
    font-weight: 400;
    font-size: 1.2rem;
`