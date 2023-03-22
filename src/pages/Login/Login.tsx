import { Button, Input, InputDiv, Myspan, P1p, P2p } from '../Login/LoginStyle'
import { Container} from '../../Global.style'
import { Link } from 'react-router-dom'


type Props = {}

const Login = (props: Props) => {
  return (
    <Container>
       <InputDiv>
        <Input type="text" placeholder='  Email' />
        <Input type="text" placeholder='  Contraseña'/>
       </InputDiv>
       <P1p>¿Has olvidado tu contraseña?</P1p>
       <Button>Inicia sesión</Button>
       
       <P2p>¿No tienes cuenta?<Myspan><Link to="/register">Regístrate</Link> </Myspan></P2p>
       

    </Container>
  )
}

export default Login