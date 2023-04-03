import React from 'react'
import { Container, OrangeText, ParagraphContainer } from '../../../Global.style'
import { MyConfetti } from './FinalStyle'
import canvasConfetti from 'canvas-confetti';
import { OrangeButton } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { Confetti } from '../../../assets';


type Props = {}

const Final = (props: Props) => {
  const activateAnimation = () => {
    canvasConfetti({
      particleCount: 350,
      spread: 150,
      origin: { y: 0.6 },
    });
  } 
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/roadmap')
  }
  return (
    <Container>
  
      <h3>¡Felicidades!</h3>
      <ParagraphContainer>¡Has completado el juego y los has hecho genial! Te deseamos lo mejor en tu bootcamp. <OrangeText>¡Adelante!</OrangeText></ParagraphContainer>
  
      <MyConfetti src={Confetti} alt="celebration with confetti" onLoad={activateAnimation} />
      <canvas id="canvas"></canvas>

      <OrangeButton onClick={handleClick}/>

    
    </Container>
  )
}

export default Final;