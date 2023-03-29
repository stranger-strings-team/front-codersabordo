import React from "react";
import { Button } from "./style";
import Icon from "../../assets/settings.svg"

type Props = {}

export const SettingsButton = (props: Props) => {
    const handleClick = () => {
        console.log("settings")
    }

    return (
        <Button href="/settings">
            <img src={Icon}/>
        </Button>
    )
}