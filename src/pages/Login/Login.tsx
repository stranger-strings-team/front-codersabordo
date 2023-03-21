import { Button, Input, InputDiv, Myspan, P1p, P2p } from '../Login/LoginStyle'
import { Container} from '../../Global.style'


type Props = {}

const Login = (props: Props) => {

  return (
    <Container>
       <InputDiv>
        <Input 
          type="email" 
          placeholder='Email' 
          name="email"
          autoComplete='off'
          aria-label="email"
          required
        />
        <Input 
          type="password" 
          placeholder='Contraseña' 
          name="password"
          autoComplete='off'
          aria-label="password"
          required
        />
       </InputDiv>
       <P1p>¿Has olvidado tu contraseña?</P1p>
       <Button>Inicia sesión</Button>
       
       <P2p>¿No tienes cuenta?<Myspan> Regístrate</Myspan></P2p>
       

    </Container>
  )
}

export default Login