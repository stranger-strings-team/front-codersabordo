import React, { useEffect, useState } from 'react'
import { Container, OrangeText } from '../../Global.style'
import Administrator from '../../assets/admin.png'
import Spacer from '../../components/Spacer/Spacer'
import { StyledLink, H3 } from "./AdminStyle"
import { findOneById } from '../../services/userServices'
import jwt_decode from "jwt-decode"

const Admin = () => {

  const [admin, setAdmin] = useState({
    "name": "",
    "surname": "",
    "email": "",
    "password": "",
    "city":"",
    "roles":[""]
  })

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const getLoggedUser = () => {
      const token = sessionStorage.getItem("access_token")
      if(!token){
        console.log("no token found")
        return
      }
      const decodedToken: {email: string; sub: string; roles: string[]} = jwt_decode(token)
      findOneById(decodedToken.sub)
        .catch()
        .then((response) => {
          //console.log(response)
          setAdmin(response)
        })
        .catch(err => console.log(err))
    }
    getLoggedUser()
  }, [])

  return (
    
    <Container>
        <h3><OrangeText>Admin</OrangeText></h3>
        <img src={Administrator} alt="user photo"/>
        {/* <Spacer size={15} axis='vertical' /> */}
        <H3>{admin.name + " " + admin.surname}</H3>

        <>
        <StyledLink to="/admin/coders" className='blue'>Coders</StyledLink>
        <StyledLink to="/admin/question" className='yellow'>Editar los questionarios</StyledLink>
        <StyledLink to="/admin/admins" className='pink'>Administradores</StyledLink>
        </>

    </Container>
    
  )
}

export default Admin;