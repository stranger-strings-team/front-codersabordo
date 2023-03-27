import { Button, Input, InputDiv, Myspan, P1p, P2p } from '../Login/LoginStyle'
import { Container} from '../../Global.style'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, FormEvent } from 'react'
import { authUserRequest } from "../../services/userServices"

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
        // console.log(response);
        token = response.data.access_token;
        // console.log("access_token: ", token);
        sessionStorage.setItem("access_token", token);
        navigate("/roadmap")
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
          type="text"
          name="email"
          placeholder="Escribe tu email"
          autoComplete="off"
          onChange={handleInput}
          required
          aria-label="email"
        />
        <Input 
          type="password"
          name="password"
          placeholder="Escribe tu contraseña"
          onChange={handleInput}
          required
          autoComplete='off'
        />
       </InputDiv>
       <P1p>¿Has olvidado tu contraseña?</P1p>
       <Button type="submit">Inicia sesión</Button>
    </form>
       
       <P2p>¿No tienes cuenta?<Myspan><Link to="/register">Regístrate</Link> </Myspan></P2p>
       

    </Container>
  )
}

export default Login
