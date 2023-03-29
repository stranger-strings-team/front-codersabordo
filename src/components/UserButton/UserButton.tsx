import React from "react";
import { Button } from "./style";
import { IconDiv } from "../icon/icon.style";
import { User } from "../../assets";

type Props = {
    loggedInUser: string | null;
}

export const UserButton = (props: Props) => {
    const { loggedInUser } = props;
    return (
        <>
            {loggedInUser && 
                <Button to="/profile">
                    <img src={User}/>
                </Button>
            }
            {!loggedInUser &&
                <Button to="/login">
                    <img src={User}/>
                </Button>
            }
        </>
    )
}