import React, { FormEvent, useState } from 'react'
import { Spacer } from '../../components';
import { Container, OrangeText } from '../../Global.style';
import { authUserRequest, patchUserRequest, patchUserResponse } from '../../services/userServices';
import { Button } from '../Login/LoginStyle';
import { InputWrapper } from '../OpenQuestion/OpenQuestionStyle';

//Falta terminar esta página

const OpenQuestion = () => {
  let token = '$2b$10$zKvHh6yVVrrzsmJJIerBhuiaV.ur57g7vB5XudnPX46XlqxQ8EWqW';

  const [answer, setAnswer] = useState({
    openQuestion: ""
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    patchUserResponse(answer, "64202cd309433ad7bef61711", token)
      .catch()
      .then((response) => {
        console.log("submitted")
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