import { Link, useNavigate } from "react-router-dom"
import { StyledLink, StyledRoadmap } from "./style"
import { sectionName } from "../Onboarding/Onboarding";
import { QuestionButton } from "../../components/QuestionButton/questionButton.style";
import { getColor } from "../Onboarding/Onboarding.style";
import { useState } from "react";

const Roadmap = () => {

    const [sectionIndex, setSectionIndex] = useState(0);

    const navigate = useNavigate();

    const redirect = (section: number) => {
        console.log("sección: ", section+1)
        setSectionIndex(section)
        navigate("/onboarding")
    }

    return (
        <StyledRoadmap>
            <h1>Secciones</h1>
            {sectionName.map((section, index) => (
              <QuestionButton 
                type="button"
                onClick={() => redirect(index)}
                key={index}
                className={`${getColor(index)}`}
              >
                {section}
              </QuestionButton>
            ))}
        </StyledRoadmap>
    )
}

export default Roadmap