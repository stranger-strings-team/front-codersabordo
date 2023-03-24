import React from 'react'
import { Link } from 'react-router-dom'
import Perfil from '../../assets/profile.png'
import Spacer from '../../components/Spacer/Spacer'
import { Container, OrangeText } from '../../Global.style'
import { Myspan } from '../Login/LoginStyle'
import { Input, InputDiv} from './ProfileStyle'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Container>
        <h3><OrangeText>Tu perfil</OrangeText></h3>
        <img src={Perfil} alt="user photo"/>
        <Spacer size={15} axis='vertical' />
        <h3>Minerva</h3>
        <InputDiv>
        <Input type="text" placeholder='  Nombre'/>
        <Input type="text" placeholder='  Apellidos'/>
        <Input type="text" placeholder='  Email'/>
        </InputDiv>
        <p><Link to="/create-password">Cambiar contraseña</Link></p>
        
    </Container>
  )
}

export default Profile;