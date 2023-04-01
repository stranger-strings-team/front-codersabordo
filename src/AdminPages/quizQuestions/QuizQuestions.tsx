import React, {useEffect, useState} from 'react'
import { Container, DarkText, GrayText, OrangeText, Row, RowRight, TextLeft } from '../../Global.style'
import Add from '../../assets/add.png'
import Delete from '../../assets/delete.png'
import Pencil from '../../assets/pencil.png'
import { IconDiv, IconDivButton, IconDivButtonRight, IconDivRight } from '../../components/icon/icon.style'
import { AdminQuestionStyled } from '../../components/AdminQuestion/AdminQuestion.style'
import Spacer from '../../components/Spacer/Spacer'
import { getQuestions } from '../../services/questionServices'
import { useNavigate } from 'react-router-dom'


type QuestionsType = {_id: string, question:string, answer:[{text:string, isCorrect:boolean}], type:string, section:string, feedbackCorrect:string, feedbackIncorrect:string}

const QuizQuestions = () => {

    const [questions, setQuestions] = useState<QuestionsType[]>([])
    
    useEffect(() => {
    async function loadQuestions () {
        const response = await getQuestions();
        setQuestions(response.data);
    };
    loadQuestions();
    }, [])

    const navigate = useNavigate()

    const handleClick = (question: QuestionsType, goTo: string) => {
        sessionStorage.setItem("question", question._id)
        console.log("set: ", sessionStorage.getItem("question"))
        navigate(goTo)
    }

  return (
    <Container>
        <Spacer size={40} axis='vertical' />

        <Row>
            <h3><OrangeText>Quiz onboarding</OrangeText></h3>
            <IconDivButton onClick={() => navigate("/admin/question/post")}><img src={Add} /></IconDivButton>
        </Row>

        <TextLeft><h2>Sección 1: Normativa</h2></TextLeft>

        {questions.filter((question)=>question.section == "Sección 1 - Compromisos").map((question, index)=>(
            <AdminQuestionStyled className='purple' key={index}>
                <DarkText>{question.question}</DarkText>
                <RowRight>
                    <IconDivButtonRight onClick={() => {handleClick(question, "/admin/question/delete")}}><img src={Delete}/></IconDivButtonRight>
                    {/* <IconDivButtonRight onClick={() => {handleClick(question, "/admin/question/edit")}}><img src={Pencil}/></IconDivButtonRight> */}
                </RowRight>
            </AdminQuestionStyled>
        ))}
        
        <Spacer size={40} axis='vertical' />

        <TextLeft><h2>Sección 2: El bootcamp</h2></TextLeft>

        {questions.filter((question)=>question.section == "Sección 2 - ¿Qué puedes esperarte del bootcamp?").map((question, index)=>(
            <AdminQuestionStyled className='blue' key={index}>
                <DarkText>{question.question}</DarkText>
                <RowRight>
                    <IconDivButtonRight onClick={() => {handleClick(question, "/admin/question/delete")}}><img src={Delete}/></IconDivButtonRight>
                    {/* <IconDivButtonRight onClick={() => {handleClick(question, "/admin/question/edit")}}><img src={Pencil}/></IconDivButtonRight> */}
                </RowRight>
            </AdminQuestionStyled>
        ))}

        <Spacer size={40} axis='vertical' />

        <TextLeft><h2>Sección 3: Después del bootcamp</h2></TextLeft>

        {questions.filter((question)=>question.section == "Sección 3 - ¿Qué puedes esperarte al finalizar el bootcamp?").map((question, index)=>(
            <AdminQuestionStyled className='pink' key={index}>
                <DarkText>{question.question}</DarkText>
                <RowRight>
                    <IconDivButtonRight onClick={() => {handleClick(question, "/admin/question/delete")}}><img src={Delete}/></IconDivButtonRight>
                    {/* <IconDivButtonRight onClick={() => {handleClick(question, "/admin/question/edit")}}><img src={Pencil}/></IconDivButtonRight> */}
                </RowRight>
            </AdminQuestionStyled>
        ))}
    </Container>
  )
}

export default QuizQuestions;
