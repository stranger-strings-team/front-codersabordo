import React from 'react'
import Confeti from '../../assets/confeti.png'
import { Container, OrangeText, ParagraphContainer } from '../../Global.style'
import { Feedback, MyConfeti } from './FinalStyle'


type Props = {}

const GameOver = (props: Props) => {
  return (
    <Container>
  
      <h3>¡Felicidades!</h3>
      <ParagraphContainer>¡Has completado el juego y los has hecho genial! Te deseamos lo mejor en tu bootcamp. <OrangeText>¡Adelante!</OrangeText></ParagraphContainer>
  
      <MyConfeti src={Confeti} alt="celebration with confeti"/>
    
    </Container>
  )
}

export default GameOver;