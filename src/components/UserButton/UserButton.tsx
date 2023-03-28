import React from "react";
import { Button } from "./style";
import Icon from "../../assets/user.svg"
import { IconDiv } from "../icon/icon.style";

type Props = {
    loggedInUser: string | null;
}

export const UserButton = (props: Props) => {
    const { loggedInUser } = props;
    return (
        <IconDiv>
            {loggedInUser && 
                <Button href="/profile">
                    <img src={Icon}/>
                </Button>
            }
            {!loggedInUser &&
                <Button href="/login">
                    <img src={Icon}/>
                </Button>
            }
        </IconDiv>
    )
}