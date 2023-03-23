import React from 'react'
import { Container, OrangeText } from '../../Global.style'
import Administrator from '../../assets/admin.png'
import Spacer from '../../components/Spacer/Spacer'
import { BlueButton, PurpleButton, YellowButton } from '../../components/QuestionButton/questionButton.style'


type Props = {}

const Admin = (props: Props) => {
  return (
    
    <Container>
        <h3><OrangeText>Admin</OrangeText></h3>
        <img src={Administrator} alt="user photo"/>
        <Spacer size={15} axis='vertical' />
        <h3>Cristina Fernandez</h3>

        <>
        <PurpleButton>Ver progreso coders</PurpleButton>
        <BlueButton>Ir a preguntas quiz</BlueButton>
        <YellowButton>Perfiles admin</YellowButton>
        </>

    </Container>
    
  )
}

export default Admin;