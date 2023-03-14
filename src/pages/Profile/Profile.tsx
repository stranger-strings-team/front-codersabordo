import React from 'react'
import Perfil from '../../assets/profile.png'
import { Container } from '../../Global.style'
import { Input, InputDiv } from './ProfileStyle'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Container>
        <h3>Tu perfil</h3>
        <img src={Perfil} alt="user photo"/>
        <p>Minerva</p>
        <InputDiv>
        <Input type="text" placeholder="Nombre"/>
        <Input type="text" placeholder="Apellido"/>
        <Input type="text" placeholder="Email"/>
        </InputDiv>
    </Container>
  )
}

export default Profile;