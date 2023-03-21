import React, {useEffect, useState} from 'react'
import { QuestionButton } from '../../components/QuestionButton/questionButton.style'
import { ParagraphContainer, AnswerImage, Container, DarkText, GlobalStyles, OrangeText, theme } from '../../Global.style'
import correct from '../../assets/correct.png'
import { questionServices } from '../../services/questionServices'
import { ThoughtBubbleStyled } from '../../components/ThoughtBubble/ThoughtBubble.style'
import { NextButton } from '../../components/NextButton'
import  Incorrecta  from '../../assets/incorrecta.png'
import { getColor } from './Onboarding.style'
import { InGameNavbar } from '../../components/navbar/InGameNavbar'
import { BackButton } from '../../components/BackButton'
import "./style.css"
import { RetryButton } from '../../components/RetryButton/RetryButton'
import { SubmitAnswerButton } from '../../components/SubmitAnswerButton/SubmitAnswerButton'

type Props = {};

type QuestionsType = {_id: string, question:string, answer:[{text:string, isCorrect:boolean}], type:string, section:string, feedbackCorrect:string, feedbackIncorrect:string}

const sectionName = [
  "Sección 1 - Compromisos",
  "Sección 2 - ¿Qué puedes esperarte del bootcamp?",
  "Sección 3 - ¿Qué puedes esperarte al finalizar el bootcamp?"
]

function Onboarding (props: Props) {

  const [first, setFirst] = useState(false)

  const [second, setSecond] = useState(false)

  const [third, setThird] = useState(false)

  const [fourth, setFourth] = useState(false)

  const [questions, setQuestions] = useState<QuestionsType[]>([])

  const filteredQuestions = questions.filter((question)=>question.section == sectionName[0])

  const [feedback, setFeedback] = useState(false);

  const [correctFeedback, setCorrectFeedback] = useState(false)

  const checkArray = [false, false, false, false] 

  const [checked, setChecked] = useState(checkArray)

  const [questionIndex, setQuestionIndex] = useState(1)

  const handleCheck = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>, isCorrect: boolean, index: number) => {
    checkArray[index] = !checkArray[index];
    setChecked([...checkArray])
    console.log("selected answers: ",checkArray)

    /* if ( index == 0 ) { setFirst(!first) }
    else if ( index  == 1 ) { setSecond(!second)}
    else if ( index  == 2 ) { setThird(!third)}
    else if ( index  == 3 ) { setFourth(!fourth)} */
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

  const handleSubmit = (question: QuestionsType, index: number) => {
    const actualAnswers: boolean[] = []
    question.answer.forEach(answer => {
      if (answer.isCorrect == false) { 
        actualAnswers.push(false) 
      } else {
        actualAnswers.push(true)
      }
    })
    console.log("correct answers: ",actualAnswers)
    setFeedback(true)
    if(checked == actualAnswers) {
      console.log("correct!")
      setCorrectFeedback(true)
    } else {
      console.log("wrong!")
      setCorrectFeedback(false)
    }
  }

  const retry = () => {
    setFeedback(false)
  }

  const handleNext = (i: number) => {
    if (feedback == true){
      if (questionIndex >= filteredQuestions.length-1){
        setQuestionIndex(questionIndex)
      } else if (false) {

      } else {
        setFeedback(false)
        setQuestionIndex(questionIndex+1)
      }
    }
  }

  useEffect(() => {
  async function loadQuestions () {
      const response = await questionServices();
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

                <label 
                onClick={(event) => handleCheck(event, answer.isCorrect, index)}
                className={ `answerbox ${getColor(index)} ${checked[index] ? "checked" : ""}`}
                key={index}  >
                  <span>
                    {answer.text}
                  </span>
                  <input
                    name={"answer"+index}
                    type='checkbox'
                    key={index}>
                  </input>
                </label>

              ))}
          </form>

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