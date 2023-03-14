import React from 'react'
import Perfil from '../../assets/profile.png'
import { Container, DarkText, OrangeText } from '../../Global.style'
import { InputDiv, Nickname } from './ProfileStyle'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Container>
        <h3><OrangeText>Tu perfil</OrangeText></h3>
        <img src={Perfil} alt="user photo"/>
        <Nickname>Minerva</Nickname>
        <InputDiv>
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellidos'/>
        <input type="text" placeholder='Email'/>
        </InputDiv>
    </Container>
  )
}

export default Profile;