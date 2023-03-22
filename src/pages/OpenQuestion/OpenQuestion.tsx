import React from 'react'
import { NextButton } from '../../components/NextButton';
import Spacer from '../../components/Spacer/Spacer';
import { Container, OrangeText } from '../../Global.style';
import { InputQuestion } from '../OpenQuestion/OpenQuestionStyle';

type Props = {}

const OpenQuestion = (props: Props) => {
  return (
    
    <Container>
          <h3><OrangeText>Una pregunta antes de empezar,</OrangeText><br></br> ¿Qué expectativas tienes de este bootcamp?</h3>
          <InputQuestion type="text" />
          <Spacer size={45} axis='vertical' />
          <NextButton/>
      </Container>
     
    
  )
}

export default OpenQuestion;