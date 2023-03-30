import { Link } from "react-router-dom";
import styled from "styled-components";

export const IconDiv = styled.button`
  max-width: 35px;
  max-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  margin: 0;
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
  margin: 1rem 0 0 0;
`