import React, {useEffect, useRef, useState} from 'react'
import { QuestionButton } from '../../components/QuestionButton/questionButton.style'
import { ParagraphContainer, AnswerImage, Container, DarkText, GlobalStyles, OrangeText, theme } from '../../Global.style'
import correct from '../../assets/correct.png'
import { getQuestions } from '../../services/questionServices'
import { ThoughtBubbleStyled } from '../../components/ThoughtBubble/ThoughtBubble.style'
import { NextButton } from '../../components/NextButton'
import  Incorrecta  from '../../assets/incorrecta.png'
import { getColor } from './Onboarding.style'
import { InGameNavbar } from '../../components/navbar/InGameNavbar'
import { BackButton } from '../../components/BackButton'
import "./style.css"
import { RetryButton } from '../../components/RetryButton/RetryButton'
import { SubmitAnswerButton } from '../../components/SubmitAnswerButton/SubmitAnswerButton'
import { useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode"
import { findOneById, patchUserRequest } from '../../services/userServices'

export type QuestionsType = {_id: string, question:string, answer:[{text:string, isCorrect:boolean}], type:string, section:string, feedbackCorrect:string, feedbackIncorrect:string}

type Props = {
  section: number
}

type User = {
  progress: [boolean]
}

export const sectionName = [
  "Sección 1 - Compromisos",
  "Sección 2 - ¿Qué puedes esperarte del bootcamp?",
  "Sección 3 - ¿Qué puedes esperarte al finalizar el bootcamp?"
]


const Onboarding = ({section}: Props) => {
  const sectionIndex = 1; // esto hace cambiar la sección

  const [questions, setQuestions] = useState<QuestionsType[]>([])

  const filteredQuestions = questions.filter((question)=>question.section == sectionName[sectionIndex])

  const [feedback, setFeedback] = useState(false);

  const [correctFeedback, setCorrectFeedback] = useState(false)

  const [checked, setChecked] = useState([false, false, false, false])

  const [questionIndex, setQuestionIndex] = useState(0)

  const [dataProgress, setDataProgress] = useState({
    progress: []
  })

  const [userProgress, setUserProgress] = useState([false, false, false])

  const [id, setId] = useState("6411d0d751f84eb36a7c8cb2")

  const navigate = useNavigate()

  const feedbackRef = useRef<null | HTMLDivElement>(null)

  const handleCheck = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, isCorrect: boolean, index: number) => {
    checked[index] = !checked[index];
    setChecked([...checked])
  }

  const handleFeedback = () => {
    setFeedback(!feedback)
  }

  const handleBack = (i: number) =>{
    if (questionIndex <= 0) {
      setQuestionIndex(questionIndex)
    } else {
      setQuestionIndex(questionIndex-1)
      setFeedback(false)
    }
  }

  const handleScroll = (ref: any) => {
    ref.current?.scrollIntoView({
      behavior: "smooth"
    })
  }

  const handleSubmit = (question: QuestionsType, index: number) => {
    const actualAnswers: boolean[] = []
    question.answer.forEach(answer => {
      if (answer.isCorrect == false) { 
        actualAnswers.push(false) 
      } else {
        actualAnswers.push(true)
      }
    })
    // console.log("selected answers: ", checked)
    // console.log("correct answers: ", actualAnswers)
    if(checked.toString() == actualAnswers.toString()) {
      // console.log("correct!")
      setCorrectFeedback(true)
    } else {
      // console.log("wrong!")
      setCorrectFeedback(false)
    }
    setFeedback(true)
    handleScroll(feedbackRef)
  }

  const retry = () => {
    setChecked([false, false, false, false])
    setFeedback(false)
  }

  const handleNext = (i: number) => {
    if (feedback == true){
      if (questionIndex >= filteredQuestions.length-1){
        handleProgress()
        navigate("/completed-section")
      } else if (false) { // TO DO

      } else {
        setFeedback(false)
        setChecked([false, false, false, false])
        setQuestionIndex(questionIndex+1)
      }
    }
  }

  useEffect(() => {
    async function getLoggedUser () {
      const token = sessionStorage.getItem("access_token")
      if(!token){
        console.log("no token found")
        return "6411d0d751f84eb36a7c8cb2"
      }
      const decodedToken: {email: string; sub: string; roles: string[]} = jwt_decode(token)
      setId(decodedToken.sub)
    }
  getLoggedUser();
  }, [])

  const handleProgress = async () => {
    const userData = findOneById(id)
    /* setDataProgress(userData) */
    if (sectionIndex >= 0) {
      userProgress[sectionIndex] = true;
      setUserProgress([...userProgress])
    } else if (sectionIndex >= 1) {
      userProgress[sectionIndex] = true;
      setUserProgress([...userProgress])
    } else if (sectionIndex >= 2) {
      userProgress[sectionIndex] = true;
      setUserProgress([...userProgress])
    }
    console.log("progress: ", userProgress)
    console.log("user: ", userData)
    patchUserRequest(id, {progress: userProgress})
  }

  useEffect(() => {
  async function loadQuestions () {
      const response = await getQuestions();
      setQuestions(response.data);
    };
  loadQuestions();
  }, [])

  return (
    <>
      {filteredQuestions.filter((question, index)=>index == questionIndex).map((question, index)=>(
        <Container key={index}>

          <h3>{question.question}</h3>
          <form className="answersform">
              {question.answer.map((answer, index) => (
              <QuestionButton 
                type="button"
                onClick={(event) => handleCheck(event, answer.isCorrect, index)}
                key={index}
                className={ `answerbox ${getColor(index)} ${checked[index] ? "checked" : ""}`}
              >
                {answer.text}
              </QuestionButton>
            ))}
          </form>
          <div ref={feedbackRef}></div>
              {feedback ? (
                correctFeedback ? (
                  <>
                    <AnswerImage src={correct}></AnswerImage>
                    <ThoughtBubbleStyled>
                    <h4><OrangeText>¡Muy bien!</OrangeText></h4>
                    <DarkText>{question.feedbackCorrect}</DarkText>
                    </ThoughtBubbleStyled>
                    <NextButton onClick={() => handleNext(questionIndex)} />
                  </>
                ):(
                  <>
                    <img src={Incorrecta}/>
                    <ParagraphContainer>
                    <DarkText>{question.feedbackIncorrect}</DarkText>
                    </ParagraphContainer>
                    <RetryButton onClick={retry}/>
                  </>
                  )
                    ) : (
                      <>
                        <div style={{display:"flex", flexDirection:"row", gap:"3rem", position:"relative"}}>
                          <BackButton onClick={() => handleBack(questionIndex)} />
                          <SubmitAnswerButton onClick={() => handleSubmit(question, index)}/>
                        </div>
                      </>
                    )
                }
        </Container>))
      }
    </>
  )
  
}

export default Onboarding
