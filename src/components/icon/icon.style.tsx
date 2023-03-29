import { Link } from "react-router-dom";
import styled from "styled-components";

export const IconDiv = styled(Link)`
 max-width: 35px;
 display: flex;
`

export const IconDivRight = styled(IconDiv)`
  margin-left: 2rem; 
  margin-top: 1rem;
`

export const IconDivButton = styled.button`
  margin-top: 2px;
  max-width: 35px;
  max-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
`

export const IconDivButtonRight = styled(IconDivButton)`

`