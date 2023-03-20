import { Button } from "./style"
import Icon from "../../assets/backarrow.svg"


export const BackButton = ({ onClick }: any) => {
    return (
        <Button onClick={onClick}>
            <img src={Icon}/>
        </Button>
    )

}