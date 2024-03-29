import React, {useEffect, useRef, useState} from 'react'
import { ParagraphContainer, AnswerImage, Container, DarkText, OrangeText } from '../../../Global.style'
import { getQuestions } from '../../../services/questionServices'
import { getColor, FeedbackDiv } from './Onboarding.style'
import "./style.css"
import { RetryButton } from '../../../components/RetryButton/RetryButton'
import { useNavigate, useParams } from 'react-router-dom'
import jwt_decode from "jwt-decode"
import { findOneById, patchUserRequest } from '../../../services/userServices'
import { BackButton, NextButton, SubmitAnswerButton, ThoughtBubbleStyled } from '../../../components'
import { QuestionButton } from '../../../components/QuestionButton/questionButton.style'
import { Correct, Incorrecta } from '../../../assets'


export type QuestionsType = {
  _id: string, 
  question: string, 
  answer: [{
    text: string, 
    isCorrect: boolean
  }], 
  type: string, 
  section: string, 
  feedbackCorrect: string, 
  feedbackIncorrect: string
}

export const sectionName = [
  "Sección 1 - Compromisos",
  "Sección 2 - ¿Qué puedes esperarte del bootcamp?",
  "Sección 3 - ¿Qué puedes esperarte al finalizar el bootcamp?"
]

const Onboarding = () => {

  let sectionIndex: number;

  const params = useParams()

  const navigate = useNavigate()

  if(params.section != undefined) {
    sectionIndex = parseInt(params.section)
  } else {
    sectionIndex = 0;
  }

  const [questions, setQuestions] = useState<QuestionsType[]>([])

  const filteredQuestions = questions.filter((question)=>question.section == sectionName[sectionIndex])

  const [feedback, setFeedback] = useState(false);

  const [correctFeedback, setCorrectFeedback] = useState(false)

  const [checked, setChecked] = useState([false, false, false, false])

  const [questionIndex, setQuestionIndex] = useState(0)

  const [userProgress, setUserProgress] = useState([false, false, false])

  const [id, setId] = useState("")

  const feedbackRef = useRef<null | HTMLDivElement>(null)

  const handleCheck = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, isCorrect: boolean, index: number) => {
    checked[index] = !checked[index];
    setChecked([...checked])
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
    if(checked.toString() == actualAnswers.toString()) {
      setCorrectFeedback(true)
    } else {
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
        if(sectionIndex == 2 && questionIndex >= filteredQuestions.length-1){
          navigate("/final")
        } else {
          navigate("/completed-section")
        }
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
        return
      }
      const decodedToken: {email: string; sub: string; roles: string[]} = jwt_decode(token)
      setId(decodedToken.sub)
      findOneById(decodedToken.sub)
        .catch()
        .then((response) => {
          setUserProgress(response.progress)
        })
        .catch(err => console.log(err))
    }
  getLoggedUser();
  }, [])

  const handleProgress = async () => {
    if (sectionIndex == 0) {
      userProgress[0] = true;
      setUserProgress([...userProgress])
    } else if (sectionIndex == 1) {
      userProgress[1] = true;
      setUserProgress([...userProgress])
    } else if (sectionIndex == 2) {
      userProgress[2] = true;
      setUserProgress([...userProgress])
    }
    patchUserRequest(id, {progress: userProgress})
  }

  useEffect(() => {
  async function loadQuestions () {
      getQuestions()
        .catch()
        .then((response) => {
          setQuestions(response.data)
        })
        .catch(err => console.log(err))
    };
  loadQuestions();
  }, [])

  return (
    <>
      {filteredQuestions.filter((question, index)=>index == questionIndex).map((question, index)=>(
        <Container key={index}>

          <h2>{question.question}</h2>
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
                    <FeedbackDiv>
                      <AnswerImage src={Correct}></AnswerImage>
                      <ThoughtBubbleStyled>
                        <h4><OrangeText>¡Muy bien!</OrangeText></h4>
                        <DarkText>{question.feedbackCorrect}</DarkText>
                      </ThoughtBubbleStyled>
                    </FeedbackDiv>
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
