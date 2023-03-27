import React from 'react'
import { Link } from 'react-router-dom'
import Perfil from '../../assets/profile.png'
import Spacer from '../../components/Spacer/Spacer'
import { Container, DarkText, OrangeText } from '../../Global.style'
import { P3p } from '../../pages/Profile/ProfileStyle'
import { Input, InputDiv} from './ProfileStyle'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Container>
        <h3><OrangeText>Tu perfil</OrangeText></h3>
        <img src={Perfil} alt="user photo"/>
        <Spacer size={12} axis='vertical' />
        <h3><DarkText>Minerva</DarkText></h3>
        <InputDiv>
        <Input type="text" placeholder='  Nombre'/>
        <Input type="text" placeholder='  Apellidos'/>
        <Input type="text" placeholder='  Email'/>
        </InputDiv>
        <P3p><Link to="/create-password">Cambiar contraseña</Link></P3p>
        <Spacer size={10} axis='vertical' />
        
    </Container>
  )
}

export default Profile;