import React from 'react'
import Completed from '../../assets/completada.png'
import { NextButton } from '../../components/NextButton'
import Spacer from '../../components/Spacer/Spacer'
import { Container } from '../../Global.style'

type Props = {}

const CompletedSection = (props: Props) => {
  return (
    <Container>
        <h3>¡Muy bien!</h3>
        <img src={Completed} alt="happy rainbow"/>
        <p>¡Has acertado todas las preguntas de esta sección!</p>
        <Spacer size={45} axis='vertical' />
        <NextButton/>
    </Container>
  )
}

export default CompletedSection