import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Perfil from '../../assets/profile.png'
import Spacer from '../../components/Spacer/Spacer'
import { Container, DarkText, Input, OrangeText } from '../../Global.style'
import { P3p } from '../../pages/Profile/ProfileStyle'
import { InputDiv} from './ProfileStyle'
import { Button, Myspan } from '../Login/LoginStyle'
import jwt_decode from "jwt-decode"
import { findOneById } from '../../services/userServices'

type Auth = {
  email: string,
  _id: string,
  roles: string[]
}

const Profile = () => {

    const navigate = useNavigate()

    const [auth, setAuth] = useState<Auth | null>(null)

    const [user, setUser] = useState({
      "name": "",
      "surname": "",
      "email": "",
      "password": "",
      "city":"",
      "roles":[""]
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
        <h3><OrangeText>Tu perfil</OrangeText></h3>
        <img src={Perfil} alt="user photo"/>
        <Spacer size={12} axis='vertical' />
        <h3><DarkText>{user.name}</DarkText></h3>
        <InputDiv>
        <Input type="text" placeholder={user.name}/>
        <Input type="text" placeholder={user.surname}/>
        <Input type="text" placeholder={user.email}/>
        </InputDiv>
        <p><Link to="/create-password">Cambiar contraseña</Link></p>
        <Button onClick={handlerLogout}>Cerrar sesión</Button>
        
    </Container>
  )
}

export default Profile;