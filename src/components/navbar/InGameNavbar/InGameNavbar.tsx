import React from "react";
import { Nav } from "./style";
import { BackButton } from "../../BackButton";
import { NextButton } from "../../NextButton";

type Props = {}

export const InGameNavbar = (props: Props) => {
    return (
        <Nav>
            <BackButton />
            <NextButton />
        </Nav>
    )
}