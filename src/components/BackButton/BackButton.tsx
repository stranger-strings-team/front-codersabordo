import { BackArrow } from "../../assets"
import { Button } from "./style"


export const BackButton = ({ onClick }: any) => {
    return (
        <Button onClick={onClick}>
            <img src={BackArrow}/>
        </Button>
    )

}