import React from "react";
import { Nav } from "./style";
import { SettingsButton } from "../../SettingsButton";
import { InfoButton } from "../../InfoButton";
import { UserButton } from "../../UserButton";

type Props = {}

export const StandardNavbar = (props: Props) => {
    return (
        <Nav>
            <SettingsButton />
            <InfoButton />
            <UserButton />
        </Nav>
    )
}