import React from 'react'
import Perfil from '../../assets/profile.png'
import Spacer from '../../components/Spacer/Spacer'
import { Container, OrangeText } from '../../Global.style'
import { Input, InputDiv, Nickname } from './ProfileStyle'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Container>
        <h3><OrangeText>Tu perfil</OrangeText></h3>
        <img src={Perfil} alt="user photo"/>
        <Spacer size={15} axis='vertical' />
        <Nickname>Minerva</Nickname>
        <InputDiv>
        <Input type="text" placeholder='  Nombre'/>
        <Input type="text" placeholder='  Apellidos'/>
        <Input type="text" placeholder='  Email'/>
        </InputDiv>
    </Container>
  )
}

export default Profile;