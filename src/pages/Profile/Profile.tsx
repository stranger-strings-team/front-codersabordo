import React from 'react'
import Perfil from '../../assets/profile.png'
import { Container } from '../../Global.style'
import { Input } from './ProfileStyle'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Container>
        <h3>Tu perfil</h3>
        <img src={Perfil} alt="user photo"/>
        <p>Minerva</p>
        <Input>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        </Input>
    </Container>
  )
}

export default Profile;