import React, {useState} from 'react'
import QuestionButton from '../../components/QuestionButton/QuestionButton'
import { BlueButton, PinkButton, PurpleButton, YellowButton } from '../../components/QuestionButton/questionButton.style'
import { ParagraphContainer, AnswerImage, Container, DarkText, GlobalStyles, OrangeText } from '../../Global.style'
import correct from '../../assets/correct.png'


type Props = {};

const Onboarding = (props: Props) => {

  const [show, setShow] = useState(true);

  return (
    <Container>
      <h3>¿Cómo hay que conectarse a la clase?</h3>
      {show ? (
        <>
          <PurpleButton>Con la cámara y el micrófono encendido</PurpleButton>
          <BlueButton onClick={()=>setShow(false)}>Con la cámara encendida y el micrófono apagado</BlueButton>
          <PinkButton>Con la cámara apagada y el micrófono encendido</PinkButton>
          <YellowButton>Es indiferente</YellowButton>
        </>
      ):(
        <>
          <BlueButton>Con la cámara encendida y el micrófono apagado</BlueButton>
          <AnswerImage src={correct}></AnswerImage>
          <ParagraphContainer>
            <DarkText>Queremos vernos las caras entre todas y <OrangeText>fomentar la participación</OrangeText>. Como seremos muchas, levantaremos la mano si queremos hablar y solo encenderemos el micrófono cuando sea nuestro turno.</DarkText>
          </ParagraphContainer>
        </>
    
      )}
      
    </Container>
  )
}

export default Onboarding