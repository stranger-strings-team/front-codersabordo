import { Button } from "./style"

const handleClick = () => {
    console.log("NEXT")
}

export const NextButton = () => {
    return (
        <Button onClick={handleClick}>SIGUIENTE</Button>
    )
}