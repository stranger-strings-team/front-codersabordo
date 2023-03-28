import React from 'react'
import Completed from '../../assets/completada.png'
import { NextButton } from '../../components/NextButton'
import Spacer from '../../components/Spacer/Spacer'
import { Container } from '../../Global.style'
import { OrangeButton } from '../../components/OrangeButton'
import { useNavigate } from 'react-router-dom'


const CompletedSection = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/roadmap')
  }

  return (
    <Container>
        <h3>¡Muy bien!</h3>
        <img src={Completed} alt="happy rainbow"/>
        <p>¡Has acertado todas las preguntas de esta sección!</p>
        <Spacer size={45} axis='vertical' />
        <NextButton onClick={handleClick}/>
    </Container>
  )
}

export default CompletedSection