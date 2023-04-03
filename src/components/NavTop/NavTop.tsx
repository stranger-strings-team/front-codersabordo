import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import home from "../../assets/Home.svg";
import { OrangeText } from "../../Global.style";
import { IconDiv } from "../icon/icon.style";
import { UserButton } from "../UserButton/UserButton";
import { StyledNavTop, H2 } from "./NavTop.style";
import { findOneById, getUsersRequest } from "../../services/userServices";
import jwt_decode from "jwt-decode"

const token = sessionStorage.getItem("access_token")

export const NavTop = () => {

  const [isAdmin, setIsAdmin] = useState(false)

  const navigate = useNavigate()

  const handleClick = () => {
    if (isAdmin == true){
      navigate("/admin")
    } else {
      navigate("/roadmap")
    }
  }

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
          if(response.roles.includes("Admin")){
            setIsAdmin(true)
          } else {
            setIsAdmin(false)
          }
        })
        .catch(err => console.log(err))
    }
    getLoggedUser()
  }, [])

  return (
    <>
      <StyledNavTop>
        <Link to="/"><H2><OrangeText>CODERS A BORDO</OrangeText></H2></Link>
        <IconDiv onClick={handleClick}><img src={home} alt="Home icon"/></IconDiv>
        <UserButton loggedInUser={token} />
      </StyledNavTop>
    </>
  )
}

// export default NavTop
