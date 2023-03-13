import styled from "styled-components";
import { Link } from "react-router-dom";
import { LeftArrowButton } from "../arrow-buttons/LeftArrowButton";
import { RightArrowButton } from "../arrow-buttons/RightArrowButton";
import { Tooltip } from "antd";

export const Nav = styled.nav`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 80px;
    background-color: #ff4700;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

