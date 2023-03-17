import React from 'react'
import Confeti from '../../assets/confeti.png'
import { Container, OrangeText, ParagraphContainer } from '../../Global.style'
import { MyConfeti } from './FinalStyle'
import canvasConfetti from 'canvas-confetti';


type Props = {}

const Final = (props: Props) => {
  const startConfetti = () => {
    canvasConfetti({
      particleCount: 350,
      spread: 120,
      origin: { y: 0.6 },
    });
   
  
  }
  return (
    <Container>
  
      <h3>¡Felicidades!</h3>
      <ParagraphContainer>¡Has completado el juego y los has hecho genial! Te deseamos lo mejor en tu bootcamp. <OrangeText>¡Adelante!</OrangeText></ParagraphContainer>
  
      <MyConfeti src={Confeti} alt="celebration with confeti" onClick={startConfetti} />
      <canvas id="canvas"></canvas>
    
    </Container>
  )
}

export default Final;