import React, { FormEvent, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Spacer } from '../../components';
import { Container, OrangeText } from '../../Global.style';
import { authUserRequest, patchUserRequest } from '../../services/userServices';
import { Button } from '../Login/LoginStyle';
import { InputWrapper } from '../OpenQuestion/OpenQuestionStyle';

//Falta terminar esta página

const OpenQuestion = () => {
  const navigate = useNavigate()
  const [answer, setAnswer] = useState({
    openQuestion: ""
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    patchUserRequest( "6421a0db9448e1c8dc9f0205", answer)
      .catch()
      .then((response) => { 
        console.log(response)
        navigate("/roadmap")
      })
      .catch(err => console.log(err))
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer({ openQuestion: e.target.value })
  };

  return (
    
    <Container>
          <h3><OrangeText>Una pregunta antes de empezar,</OrangeText><br></br> ¿Qué expectativas tienes de este bootcamp?</h3>
          <form onSubmit={handleSubmit}>
          <label htmlFor="openQuestion"></label>
          <InputWrapper name="openQuestion"
							placeholder="Escribe tu respuesta..."
							autoComplete="off"
							onChange={(event)=>handleInput(event)}
							required>
        
          </InputWrapper> 
          <Spacer size={45} axis='vertical' />
          <Button type="submit">Enviar</Button>
          </form>
      </Container>
     
    
  )
}

export default OpenQuestion;