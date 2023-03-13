import { Button } from "./style"
import Icon from "../../assets/backarrow.svg"

const handleClick = () => {
    console.log("BACK")
}

export const BackButton = () => {
    return (
        <Button onClick={handleClick}>
            <img src={Icon}/>
        </Button>
    )

}