import styled from "styled-components";
import { theme } from "../../../Global.style";
import { Link } from "react-router-dom";



export const StyledRoadmap = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledLink = styled(Link)`
    margin: 0 1rem;
    color: ${theme.darkText};
    background-color: ${theme.blueBackground};
    padding: 1rem;
    border-radius: 10px;
    margin: 1rem;
`