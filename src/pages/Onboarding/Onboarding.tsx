import React from 'react'
import Header from '../../components/Header/Header'
import QuestionButton from '../../components/QuestionButton/QuestionButton'
import { Container, GlobalStyles } from '../../Global.style'

type Props = {}

const Onboarding = (props: Props) => {
  return (
    <Container>
      <h3>¿Cómo hay que conectarse a la clase?</h3>
      <QuestionButton></QuestionButton>
    </Container>
  )
}

export default Onboarding