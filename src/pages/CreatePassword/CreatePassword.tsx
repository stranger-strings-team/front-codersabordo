import React from 'react'
import { Container, OrangeText } from '../../Global.style'
import Perfil from '../../assets/profile.png'
import Spacer from '../../components/Spacer/Spacer'
import { InputDiv } from '../Profile/ProfileStyle'
import { Input } from '../Login/LoginStyle'
import { Link } from 'react-router-dom'

type Props = {}

const CreatePassword = (props: Props) => {
  return (
    <Container>
        <h3><OrangeText>Cambiar tu contraseña</OrangeText></h3>
        <img src={Perfil} alt="user photo"/>
        <Spacer size={15} axis='vertical' />
        <h3>Minerva</h3>
        <InputDiv>
        <Input type="text" placeholder='  Contraseña actual'/>
        <Input type="text" placeholder='  Contraseña nueva'/>
        <Input type="text" placeholder='  Confirmar contraseña nueva'/>
        </InputDiv>
        
    </Container>
  )
}

export default CreatePassword;