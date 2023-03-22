import React from 'react'
import { Container, OrangeText, DarkText } from '../../Global.style'
import Perfil from '../../assets/profile.png'
import Spacer from '../../components/Spacer/Spacer'
import { BlueButton, PurpleButton, YellowButton } from '../../components/QuestionButton/questionButton.style'


type Props = {}

const Admin = (props: Props) => {
  return (
    
    <Container>
        <h3><OrangeText>Admin</OrangeText></h3>
        <img src={Perfil} alt="user photo"/>
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