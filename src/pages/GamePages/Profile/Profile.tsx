import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Input, DarkText, OrangeText } from '../../../Global.style'
import { InputDiv} from './ProfileStyle'
import { Button, Myspan } from '../Login/LoginStyle'
import jwt_decode from "jwt-decode"
import { findOneById } from '../../../services/userServices'
import { Profiles } from '../../../assets'
import { Spacer } from '../../../components'

type Auth = {
  email: string,
  _id: string,
  roles: string[]
}


const Profile = () => {

    const navigate = useNavigate();

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
      location.reload()
    };

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
    }, [])

  return (
    <Container>
      <h3><OrangeText>Tu perfil</OrangeText></h3>
        <img src={Profiles} alt="user photo"/>
        {/* <Spacer size={12} axis='vertical' /> */}
        <h3><DarkText>{user.name + " " + user.surname}</DarkText></h3>
        <p>{user.email}</p>
        <Spacer size={50} axis='vertical' />
        <Button onClick={handlerLogout}>Cerrar sesión</Button>
    </Container>
  )
}

export default Profile;