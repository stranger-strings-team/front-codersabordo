import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Perfil from '../../assets/profile.png'
import Spacer from '../../components/Spacer/Spacer'
import { Container, DarkText, Input, OrangeText } from '../../Global.style'
import { P3p } from '../../pages/Profile/ProfileStyle'
import { InputDiv} from './ProfileStyle'
import { Button, Myspan } from '../Login/LoginStyle'

type Props = {}

const Profile = () => {

    const navigate = useNavigate()

    const handlerLogout = () => {
      sessionStorage.removeItem("access_token");
      navigate("/login")
    }

  return (
    <Container>
        <h3><OrangeText>Tu perfil</OrangeText></h3>
        <img src={Perfil} alt="user photo"/>
        <Spacer size={12} axis='vertical' />
        <h3><DarkText>Minerva</DarkText></h3>
        <InputDiv>
        <Input type="text" placeholder='Nombre'/>
        <Input type="text" placeholder='Apellidos'/>
        <Input type="text" placeholder='Email'/>
        </InputDiv>
        <p><Link to="/create-password">Cambiar contraseña</Link></p>
        <Button onClick={handlerLogout}>Cerrar sesión</Button>
        
    </Container>
  )
}

export default Profile;