import React, { useEffect, useState } from 'react'
import { Container, Input, OrangeText } from '../../../Global.style'
import { InputDiv } from '../Profile/ProfileStyle'
import { Link, useNavigate } from 'react-router-dom'
import { findOneById } from '../../../services/userServices'
import jwt_decode from "jwt-decode"
import { Spacer } from '../../../components'
import { Profiles } from '../../../assets'

type User = {
  email: string,
  _id: string,
  roles: string[]
}

const CreatePassword = () => {

  const navigate = useNavigate()

  const [auth, setAuth] = useState<User | null>(null)

  const [user, setUser] = useState({
    "name": "",
    "surname": "",
    "email": "",
    "password": "",
    "city":""
  })

  const handlerLogout = () => {
    sessionStorage.removeItem("access_token");
    navigate("/login")
  }

  useEffect(() => {
    const authenticateUser = async () => {
      const token = sessionStorage.getItem("access_token")
      if(!token){
        console.log("no token found")
        return
      }
      const decodedToken: {email: string; sub: string; roles: string[]} = jwt_decode(token)
      //console.log("email: ", decodedToken.email)

      const authData = {
        email: decodedToken.email,
        _id: decodedToken.sub,
        roles: decodedToken.roles
      }

      try {
        const userData = await findOneById(authData._id)
        setAuth(userData)
        setUser(userData)
        //console.log("userData: ", auth)
      }
      catch (error) {
        console.log(error)
        setAuth(null)
      }
    }
    authenticateUser()
  })
  return (
    <Container>
        <h3><OrangeText>Cambiar tu contraseña</OrangeText></h3>
        <img src={Profiles} alt="user photo"/>
        <Spacer size={15} axis='vertical' />
        <h3>{user.name}</h3>
        <InputDiv>
        <Input type="text" placeholder='Contraseña actual'/>
        <Input type="text" placeholder='Contraseña nueva'/>
        <Input type="text" placeholder='Confirmar contraseña nueva'/>
        </InputDiv>
        
    </Container>
  )
}

export default CreatePassword;