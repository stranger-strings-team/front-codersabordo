import { Link } from "react-router-dom"
import { StyledRoadmap } from "./style"

const Roadmap = () => {
    return (
        <StyledRoadmap>
            <Link to="/onboarding">QUIZ</Link>
            <Link to="/onboarding">QUIZ 2</Link>
            <Link to="/onboarding">QUIZ 3</Link>
        </StyledRoadmap>
    )
}

export default Roadmap