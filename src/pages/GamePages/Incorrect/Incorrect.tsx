import React from 'react'
import { Incorrecta } from '../../../assets'
import { NextButton } from '../../../components'
import { BlueButton, PurpleButton } from '../../../components/QuestionButton/questionButton.style'
import {Container, ParagraphContainer, DarkText} from '../../../Global.style'


type Props = {}

const Incorrect = (props: Props) => {
  return (
    <Container>
        <h3>Para que el bootcamp funcione correctamente, ¿qué compromisos tendrías que cumplir?</h3>
        <PurpleButton>Respeto</PurpleButton>
        <BlueButton>Puntualidad y asistencia</BlueButton>
        <img src={Incorrecta}/>
        <ParagraphContainer>
            <DarkText>¡Inténtalo de nuevo al final de la sección!</DarkText>
          </ParagraphContainer>
          <NextButton/>
    </Container>
  )
}

export default Incorrect;