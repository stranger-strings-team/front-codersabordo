import React, { FormEvent, useState } from 'react'
import { Spacer } from '../../components';
import { Container, OrangeText } from '../../Global.style';
import { authUserRequest, patchUserRequest } from '../../services/userServices';
import { Button } from '../Login/LoginStyle';
import { InputQuestion } from '../OpenQuestion/OpenQuestionStyle';

//Falta terminar esta página

const OpenQuestion = () => {
  let token;

  const [post, setPost] = useState({
    openQuestion: ""
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

  //  patchUserRequest(post)
   //   .catch()
   //   .then((response) => {
   //     console.log("submitted")
   //   })
   //   .catch(err => console.log(err))
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ openQuestion: e.target.value })
  };
  return (
    
    <Container>
          <h3><OrangeText>Una pregunta antes de empezar,</OrangeText><br></br> ¿Qué expectativas tienes de este bootcamp?</h3>
          <form onSubmit={handleSubmit}>
          <InputQuestion type="text" name="openQuestion" onChange={handleInput} />
          <Spacer size={45} axis='vertical' />
          <Button type="submit">Enviar</Button>
          </form>
      </Container>
     
    
  )
}

export default OpenQuestion;