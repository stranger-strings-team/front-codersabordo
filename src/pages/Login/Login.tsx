import { Button, InputDiv, Myspan, P1p, P2p } from '../Login/LoginStyle'
import { Container, Input} from '../../Global.style'
import { Link } from 'react-router-dom'
import React from 'react'


type Props = {}

const Login = (props: Props) => {

  return (
    <Container>
       <InputDiv>
        <Input 
          type="text" 
          placeholder='  Email' 
          name="email"
          autoComplete='off'
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
       <Button><Link to="/roadmap">Inicia sesión</Link></Button>
       
       <P2p>¿No tienes cuenta?<Myspan><Link to="/register">Regístrate</Link> </Myspan></P2p>
       

    </Container>
  )
}

export default Login