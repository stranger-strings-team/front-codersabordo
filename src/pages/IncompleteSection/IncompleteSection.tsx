import React from 'react'
import Rain from '../../assets/rain.png'
import { NextButton } from '../../components/NextButton'
import Spacer from '../../components/Spacer/Spacer'
import { Container } from '../../Global.style'

type Props = {}

export const IncompleteSection = (props: Props) => {
  return (
    <Container>
        <h3>¡Revisa un poco más!</h3>
        <img src={Rain} alt="rainy cloud"/>
        <Spacer size={20} axis='vertical' />
        <p>Para pasar a la siguiente sección, ¡Repite las preguntas incorrectas!</p>
        <Spacer size={45} axis='vertical' />
        <NextButton/>
    </Container>
   
  )
}

export default IncompleteSection;