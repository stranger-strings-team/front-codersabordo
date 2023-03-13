import React from "react";
import { Button } from "./style";
import Icon from "../../assets/user.svg"

type Props = {}

export const UserButton = (props: Props) => {
    const handleClick = () => {
        console.log("user")
    }

    return (
        <Button onClick={ handleClick }>
            <img src={Icon}/>
        </Button>
    )
}