import { Button, Input, InputDiv, Myspan, P1p, P2p } from '../Login/LoginStyle'
import { Container} from '../../Global.style'
import { Link } from 'react-router-dom'
import React, { useState, FormEvent } from 'react'
import { getQuestions } from "../../services/questionServices"


type Props = {}

const Login = (props: Props) => {

  const [post, setPost] = useState({
	"email":"",
	"password":""
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
      })
      .catch(err => console.log(err))
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  };
	
  return (
    <Container>
       <InputDiv>
        <Input 
          type="text" 
          placeholder='Email' 
          name="email"
          autoComplete='off'
          onChange={handleInput}
          required
        />
        <Input 
          type="text" 
          placeholder='  Contraseña' 
          name="password"
          autoComplete='off'
          required
        />
       </InputDiv>
       <P1p>¿Has olvidado tu contraseña?</P1p>
       <Button>Inicia sesión</Button>
       
       <P2p>¿No tienes cuenta?<Myspan><Link to="/register">Regístrate</Link> </Myspan></P2p>
       

    </Container>
  )
}

export default Login
