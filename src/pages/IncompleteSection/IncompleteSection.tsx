import React from 'react'
import Rain from '../../assets/rain.png'
import { Container, DarkText } from '../../Global.style'

type Props = {}

export const IncompleteSection = (props: Props) => {
  return (
    <Container>
        <h3>¡Revisa un poco más!</h3>
        <img src={Rain} alt="rainy cloud"/>
        <p>Para pasar a la siguiente sección, ¡Repite las preguntas incorrectas!</p>
    </Container>
  )
}

export default IncompleteSection;