import React from "react";
import { Nav } from "./style";
import { SettingsButton } from "../../../unused/SettingsButton";
import { InfoButton } from "../../../unused/InfoButton";
import { UserButton } from "../../UserButton";

const token = sessionStorage.getItem("access_token")

export const StandardNavbar = () => {
    return (
        <Nav>
            <SettingsButton />
            <InfoButton />
            <UserButton loggedInUser={token} />
        </Nav>
    )
}