import React from "react";
import { Nav } from "./StandardNavbar/style";
import { SettingsButton } from "../../unused/SettingsButton";
import { InfoButton } from "../../unused/InfoButton";
import { UserButton } from "../UserButton";
import { StandardNavbar } from "./StandardNavbar";
import { InGameNavbar } from "./InGameNavbar";

type Props = {
    inGame: boolean;
}

export const NavBar = (props: Props) => {
    const { inGame } = props;

    return (
        <div>
            {inGame &&
                <></>
            }
            {!inGame &&
                <StandardNavbar />
            }
        </div>
    )
}