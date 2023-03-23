import React from 'react'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import { Form, Input, Select, Div } from './Register.styled'
import { P2p, Myspan } from "../Login/LoginStyle.tsx"
import { Link } from 'react-router-dom'

type Props = {}

const Register = (props: Props) => {
  return (
    <Div className="">
        <Form action="">
          <Input type="text" placeholder='Nombre' />
          <Input type="text" placeholder='Apellidos' />
          <Input type="email" placeholder='Email' />
          <Input type="password" placeholder='Contraseña' />
          <Select placeholder='Escuela'>
            <option value='Barcelona'>Barcelona</option>
            <option value='Xixon'>Xixon</option>
            <option value='Sevilla'>Sevilla</option>
            <option value='Madrid'>Madrid</option>
            <option value='Asturies'>Asturies</option>
            <option value='Mérida'>Mérida</option>
            <option value='Norte Online'>Norte Online</option>
          </Select>
        </Form>
        <SubmitButton />
       <P2p>¿Ya tienes una cuenta?<Myspan><Link to="/login"> Accede</Link> </Myspan></P2p>
        
    </Div>
  )
}

export default Register
