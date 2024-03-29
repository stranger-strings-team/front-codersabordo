import React, { useEffect, useState } from 'react'
import { AdminQuestionStyled } from '../../../components/AdminQuestion/AdminQuestion.style'
import Spacer from '../../../components/Spacer/Spacer'
import { Container, ParagraphContainer } from '../../../Global.style'
import { Button } from '../../GamePages/Login/LoginStyle'
import { deleteOneQuestion, getOneQuestion } from '../../../services/questionServices'
import { QuestionsType } from '../../GamePages/Onboarding/Onboarding'
import { useNavigate } from 'react-router-dom'


const EliminateQuestion = () => {

  const navigate = useNavigate()

  const [question, setQuestion] = useState<QuestionsType>()

  useEffect(() => {
  async function loadQuestion () {
    const id = sessionStorage.getItem("question");
    getOneQuestion(id)
      .catch()
      .then((res) => {
        setQuestion(res.data)
        sessionStorage.removeItem("question");
      })
      .catch(err => console.log(err))
  };
  loadQuestion();
  }, [])

  const handleClick = () => {
    deleteOneQuestion(question?._id)
      .catch()
			.then((response) => {
        navigate("/admin/question")
			})
			.catch(err => console.log(err))
  }

  return (

    <Container>
        <h4>¿Estás segura que quieres eliminar esta pregunta?</h4>
        <AdminQuestionStyled className='pink'>{question?.question}</AdminQuestionStyled>
        <Spacer size={30} axis='vertical' />
        <Button onClick={handleClick}>Eliminar</Button>
    </Container>
  )
}

export default EliminateQuestion;