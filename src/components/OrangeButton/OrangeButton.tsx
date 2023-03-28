import { Button } from "./style"


export const OrangeButton = ({ onClick }: any, text:string) => {
    return (
        <Button onClick={onClick}>{text}</Button>
    )
}