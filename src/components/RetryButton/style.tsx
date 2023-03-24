import styled from "styled-components";
import { theme } from "../../Global.style";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.orange};
    background: #FFDED1;
    border-radius: 5px;
    height: 55px;
    margin: 0;
    border: 0;
    font-weight: 600;
    font-size: 1.25rem;    
`