import styled from "styled-components";
import { GlobalStyles, theme } from '../../Global.style'
import { Link } from "react-router-dom";


export const H3 = styled.h3`
    margin: 0 0 2rem 0;
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