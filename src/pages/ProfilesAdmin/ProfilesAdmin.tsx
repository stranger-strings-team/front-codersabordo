import React from 'react'
import Spacer from '../../components/Spacer/Spacer'
import { Container, OrangeText } from '../../Global.style'
import { Button } from '../Login/LoginStyle'
import { Input, InputDiv } from '../Profile/ProfileStyle'
import { Padmin, ProfileAdminDiv, YellowDiv } from './ProfilesAdminStyle'


type Props = {}

const ProfilesAdmin = (props: Props) => {
  return (
    <Container>
        <h3><OrangeText>Perfiles admin</OrangeText></h3>
        <p>Crear un nuevo perfil admin</p>
        <InputDiv>
        <Spacer size={10} axis='vertical' />
        <Input type="text" placeholder='    Nombre' />
        <Input type="text" placeholder='    Apellidos' />
        <Input type="email" placeholder='   Email' />
        <Input type="password" placeholder='    Contraseña' />
        <Button>Añadir</Button>
        <p>Perfiles admin</p>
        </InputDiv>

        <YellowDiv>
        <ProfileAdminDiv>
            <Padmin>Judith Lloveras </Padmin>
            <Padmin>judith@lloveras.com</Padmin>
            <img/>
            </ProfileAdminDiv>
        <ProfileAdminDiv>
            <Padmin>David Picó</Padmin>
            <Padmin>david@pico.com</Padmin>
            <img/>
        </ProfileAdminDiv>
        </YellowDiv>

    </Container>
  )
}

export default ProfilesAdmin;