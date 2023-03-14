import React from 'react'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import { Form, Input, Select } from './Register.styled'

type Props = {}

const Register = (props: Props) => {
  return (
    <div>
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
        
    </div>
  )
}

export default Register