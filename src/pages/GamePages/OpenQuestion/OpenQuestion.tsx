import React, { FormEvent, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Spacer } from '../../../components';
import { Container, OrangeText } from '../../../Global.style';
import { authUserRequest, findOneById, patchUserRequest } from '../../../services/userServices';
import { Button } from '../Login/LoginStyle';
import { InputWrapper } from '../OpenQuestion/OpenQuestionStyle';
import jwt_decode from "jwt-decode"


const OpenQuestion = () => {
  const navigate = useNavigate()
  const [answer, setAnswer] = useState({
    openQuestion: ""
  })
  const [id, setId] = useState<string>("6411d0d751f84eb36a7c8cb2")

  useEffect(() => {
    const token = sessionStorage.getItem("access_token")
    if(!token){
      console.log("no token found")
      return
    }
    const decodedToken: {email: string; sub: string; roles: string[]} = jwt_decode(token)
      const getUser = async () => {
      findOneById(decodedToken.sub)
      .catch()
      .then((user) => {
        if(user._id == undefined){
          setId("6411d0d751f84eb36a7c8cb2")
        }
        setId(user._id)
        //console.log("id: ", id)
      })
      .catch(err => console.log(err))
    }
    getUser()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    patchUserRequest(id , answer)
      .catch()
      .then((response) => { 
        //console.log(response)
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