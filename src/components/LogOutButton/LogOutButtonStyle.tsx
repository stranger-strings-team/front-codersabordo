import styled from "styled-components";
import { theme } from "../../Global.style";

export const StyledLogOutButton = styled.button`
background-color: ${theme.orange};
width: 200px;
color: white;
height: 40px;
border-radius: 50px;
display: flex;
:hover{
    color: none;
}
`