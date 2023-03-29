import React from 'react'
import { Container } from '../../Global.style'
import { useNavigate } from 'react-router-dom'
import { OrangeButton, Spacer } from '../../components'
import { Completed } from '../../assets'


const CompletedSection = () => {

  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate("/roadmap")
  }

  return (
    <Container>
        <h3>¡Muy bien!</h3>
        <img src={Completed} alt="happy rainbow"/>
        <p>¡Has acertado todas las preguntas de esta sección!</p>
        <Spacer size={45} axis='vertical' />
        <OrangeButton onClick={handleClick}/>
    </Container>
  )
}

export default CompletedSection