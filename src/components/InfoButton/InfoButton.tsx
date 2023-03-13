import React from "react";
import { Button } from "./style";
import Icon from "../../assets/info.svg"

type Props = {}

export const InfoButton = (props: Props) => {
    const handleClick = () => {
        console.log("info")
    }

    return (
        <Button onClick={ handleClick }>
            <img src={Icon}/>
        </Button>
    )
}