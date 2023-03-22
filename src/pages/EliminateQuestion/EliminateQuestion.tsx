import React from 'react'
import { Container } from 'semantic-ui-react'
import Spacer from '../../components/Spacer/Spacer'
import { ParagraphContainer } from '../../Global.style'
import { Button } from '../Login/LoginStyle'

type Props = {}

const EliminateQuestion = (props: Props) => {
  return (
    <Container>
        <h4>¿Estás segura que quieres eliminar esta pregunta?</h4>
        <ParagraphContainer>¿Cuándo puedes perder tu condición de participante en el programa?</ParagraphContainer>
        <Spacer size={30} axis='vertical' />
        <Button>Eliminar</Button>
    </Container>
  )
}

export default EliminateQuestion;