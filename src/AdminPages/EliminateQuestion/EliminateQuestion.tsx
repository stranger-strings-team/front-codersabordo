import React, { useEffect, useState } from 'react'
import { AdminQuestionStyled } from '../../components/AdminQuestion/AdminQuestion.style'
import Spacer from '../../components/Spacer/Spacer'
import { Container, ParagraphContainer } from '../../Global.style'
import { Button } from '../../pages/Login/LoginStyle'
import { deleteOneQuestion, getOneQuestion } from '../../services/questionServices'
import { QuestionsType } from '../../pages/Onboarding/Onboarding'
import { useNavigate } from 'react-router-dom'


const EliminateQuestion = () => {

  const navigate = useNavigate()

  const [question, setQuestion] = useState<QuestionsType>()

  useEffect(() => {
  async function loadQuestion () {
    const id = sessionStorage.getItem("question");
    console.log("read: ", id)
    const response = await getOneQuestion(id);
    setQuestion(response.data);
    sessionStorage.removeItem("question");
  };
  loadQuestion();
  }, [])

  const deleteQuestion = async (id: string | undefined) => {
    deleteOneQuestion(id)
  }

  const handleClick = () => {
    console.log("hola")
    deleteQuestion(question?._id)
      .catch()
			.then((response) => {
				console.log(response)
			})
			.catch(err => console.log(err))
    navigate("/admin/question")
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