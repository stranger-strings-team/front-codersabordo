import React from "react";
import { Nav } from "./style";
import { SettingsButton } from "../SettingsButton";
import { InfoButton } from "../InfoButton";
import { UserButton } from "../UserButton";

type Props = {}

export const NavBar = (props: Props) => {
    return (
        <Nav>
            <SettingsButton />
            <InfoButton />
            <UserButton />
        </Nav>
    )
}