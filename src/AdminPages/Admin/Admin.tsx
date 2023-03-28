import React from 'react'
import { Container, OrangeText } from '../../Global.style'
import Administrator from '../../assets/admin.png'
import Spacer from '../../components/Spacer/Spacer'
import { StyledLink } from "./AdminStyle"
import { BlueButton, PurpleButton, YellowButton } from '../../components/QuestionButton/questionButton.style'
import { Link } from 'react-router-dom'


type Props = {}

const Admin = (props: Props) => {

  return (
    
    <Container>
        <h3><OrangeText>Admin</OrangeText></h3>
        <img src={Administrator} alt="user photo"/>
        <Spacer size={15} axis='vertical' />
        <h3>Cristina Fernandez</h3>

        <>
        <StyledLink to="/admin/coders" className='blue'>Coders</StyledLink>
        <StyledLink to="/admin/question" className='yellow'>Editar los questionarios</StyledLink>
        <StyledLink to="/admin/admins" className='pink'>Administradores</StyledLink>
        </>

    </Container>
    
  )
}

export default Admin;