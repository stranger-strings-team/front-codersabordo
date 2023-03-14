import React from 'react'
import Completed from '../../assets/completada.png'
import { Container } from '../../Global.style'

type Props = {}

const CompletedSection = (props: Props) => {
  return (
    <Container>
        <h3>¡Muy bien!</h3>
        <img src={Completed} alt="happy rainbow"/>
        <p>¡Has acertado todas las preguntas de esta sección!</p>
    </Container>
  )
}

export default CompletedSection