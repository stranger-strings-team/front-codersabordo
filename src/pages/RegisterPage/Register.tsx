import React, { useState, FormEvent } from 'react'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import { Input } from '../../Global.style'
import { Form, Select, Div } from './Register.styled'
import { P2p, Myspan } from "../Login/LoginStyle"
import { Link } from 'react-router-dom'
import { postUserRequest } from "../../services/userServices"

type Props = {}

const Register = (props: Props) => {

  const [post, setPost] = useState({
    "name": "",
    "surname": "",
    "email": "",
    "password": "",
    "city":""
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    postUserRequest(post)
      .catch()
      .then((response) => {
        console.log(response)
    })
      .catch(err => console.log(err))
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  };

  return (
    <Div>
        <Form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            name="name"
            aria-label="name"
            placeholder='Nombre' 
            onChange={handleInput}
            required
          />
          <Input 
            type="text" 
            name="surname"
            aria-label="surname"
            placeholder='Apellidos' 
            onChange={handleInput}
            required
          />
          <Input 
            type="email"
            name="email"
            aria-label="email" 
            placeholder='Email' 
            onChange={handleInput} 
            required 
          />
          <Input 
                type="password"
                name="password"
                aria-label="password" 
                placeholder='Contraseña' 
                onChange={handleInput} 
                required 
          />
          <Input name="city" type="text" list="city" placeholder='Escuela' onChange={handleInput} required />
          <datalist id="city">
            <option value='Barcelona'>Barcelona</option>
            <option value='Xixon'>Xixon</option>
            <option value='Sevilla'>Sevilla</option>
            <option value='Madrid'>Madrid</option>
            <option value='Asturies'>Asturies</option>
            <option value='Mérida'>Mérida</option>
            <option value='Norte Online'>Norte Online</option>
            </datalist>
          
        <SubmitButton type="submit"/>
        </Form>
       <P2p>¿Ya tienes una cuenta?<Myspan><Link to="/login">Accede</Link> </Myspan></P2p>
       
    </Div>
  )
}

export default Register
