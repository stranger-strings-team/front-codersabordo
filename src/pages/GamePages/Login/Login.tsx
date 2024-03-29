import { Button, InputDiv, Myspan, P1p, P2p } from '../Login/LoginStyle'
import { Container, Input, OrangeText} from '../../../Global.style'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, FormEvent } from 'react'
import { authUserRequest, findOneById } from "../../../services/userServices"
import jwt_decode from "jwt-decode"

const Login = () => {
	let token;

  const navigate = useNavigate()

  const [post, setPost] = useState({
	"email": "",
	"password": ""
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    authUserRequest(post)
      .catch()
      .then((response) => {
        token = response.data.access_token;
        sessionStorage.setItem("access_token", token);
        const decodedToken: {email: string; sub: string; roles: string[]} = jwt_decode(token)
        const user: any = findOneById(decodedToken.sub)
        findOneById(decodedToken.sub)
          .catch()
          .then((user) => {
            if(!user.roles.includes("Admin") && user.openQuestion == undefined){
              navigate("/welcome")
              location.reload()
            } else if (user.openQuestion != undefined || user.roles.includes("Admin")){
              navigate("/profile")
              location.reload()
            } else {
              navigate("/open-question")
              location.reload()
            }
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  };
	
  return (
    <Container>
    <form onSubmit={handleSubmit}>
       <InputDiv>
        <Input 
          type="email" 
          placeholder='Email' 
          name="email"
          autoComplete="off"
          onChange={handleInput}
          required
          aria-label="email"
        />
        <Input 
          type="password" 
          placeholder='Contraseña' 
          name="password"
          onChange={handleInput}
          required
          autoComplete='off'
        />
       </InputDiv>
       {/* <P1p>¿Has olvidado tu contraseña?</P1p> */}
       <Button type="submit">Inicia sesión</Button>
    </form>
       
       <P2p>¿No tienes cuenta? <OrangeText><Link to="/register">Regístrate</Link></OrangeText></P2p>
       

    </Container>
  )
}

export default Login
