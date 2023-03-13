import React from 'react'
import Perfil from '../../assets/profile.png'
import { Container, DarkText } from '../../Global.style'
import { InputDiv } from './ProfileStyle'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Container>
        <h3>Tu perfil</h3>
        <img src={Perfil} alt="user photo"/>
        <p>Minerva</p>
        <InputDiv>
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellidos'/>
        <input type="text" placeholder='Email'/>
        </InputDiv>
    </Container>
  )
}

export default Profile;