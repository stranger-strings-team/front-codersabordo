import React from 'react'
import { Container, OrangeText } from '../../Global.style'
import Administrator from '../../assets/admin.png'
import Spacer from '../../components/Spacer/Spacer'
import { StyledLink, H3 } from "./AdminStyle"


type Props = {}

const Admin = (props: Props) => {

  return (
    
    <Container>
        <h3><OrangeText>Admin</OrangeText></h3>
        <img src={Administrator} alt="user photo"/>
        {/* <Spacer size={15} axis='vertical' /> */}
        <H3>Cristina Fernández</H3>

        <>
        <StyledLink to="/admin/coders" className='blue'>Coders</StyledLink>
        <StyledLink to="/admin/question" className='yellow'>Editar los questionarios</StyledLink>
        <StyledLink to="/admin/admins" className='pink'>Administradores</StyledLink>
        </>

    </Container>
    
  )
}

export default Admin;