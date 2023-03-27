import React from 'react'
import { AdminQuestionStyled } from '../../components/AdminQuestion/AdminQuestion.style'
import Spacer from '../../components/Spacer/Spacer'
import { Container, ParagraphContainer } from '../../Global.style'
import { Button } from '../../pages/Login/LoginStyle'

type Props = {}

const EliminateQuestion = (props: Props) => {
  return (
    <Container>
        <h4>¿Estás segura que quieres eliminar esta pregunta?</h4>
        <AdminQuestionStyled className='pink'>¿Cuándo puedes perder tu condición de participante en el programa?</AdminQuestionStyled>
        <Spacer size={30} axis='vertical' />
        <Button>Eliminar</Button>
    </Container>
  )
}

export default EliminateQuestion;