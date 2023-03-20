import React, {useEffect, useState} from 'react'
// import QuestionButton from '../../components/QuestionButton/QuestionButton'
import { QuestionButton } from '../../components/QuestionButton/questionButton.style'
import { ParagraphContainer, AnswerImage, Container, DarkText, GlobalStyles, OrangeText, theme } from '../../Global.style'
import correct from '../../assets/correct.png'
import {questionServices} from '../../services/questionServices'
import { ThoughtBubbleStyled } from '../../components/ThoughtBubble/ThoughtBubble.style'
import { NextButton } from '../../components/NextButton'
import  Incorrecta  from '../../assets/incorrecta.png'
import { getColor } from './Onboarding.style'
import { InGameNavbar } from '../../components/navbar/InGameNavbar'
import { BackButton } from '../../components/BackButton'

type Props = {};

type QuestionsType = {_id: string, question:string, answer:[{text:string, isCorrect:boolean}], type:string, section:string, feedbackCorrect:string, feedbackIncorrect:string}

const sectionName = [
  "Sección 1 - Compromisos",
  "",
  ""
]

function Onboarding (props: Props) {

  const [questions, setQuestions] = useState<QuestionsType[]>([])

  const filteredQuestions = questions.filter((question)=>question.section == sectionName[0])

  const [feedback, setFeedback] = useState(false);

  const [correctFeedback, setCorrectFeedback] = useState(false)

  const [checked, setChecked] = useState([false, false, false, false])

  const [questionIndex, setQuestionIndex] = useState(1)

  const checkAnswers = () => {
    if (checked) {

    }
  }

  const handleFeedback = () => {
    if (feedback == true) {
      setFeedback(false)
    } else {
      setFeedback(true)
    }
  }

  const handleBack = (i: number) =>{
    if (questionIndex <= 0) {
      setQuestionIndex(questionIndex)
    } else {
      setQuestionIndex(questionIndex-1)
      setFeedback(false)
    }
  }

  const handleNext = (i: number) => {
    if (feedback == true){
      if (questionIndex >= filteredQuestions.length-1){
        setQuestionIndex(questionIndex)
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
              {question.answer.map((answer, index) => (
                <QuestionButton
                onClick={()=> {
                  setFeedback(true)
                  if(question.answer[index].isCorrect===true) {
                    setCorrectFeedback(true)
                  } else {
                    setCorrectFeedback(false)
                  }
                }}
                key={index}
                className={getColor(index)}>
                  {answer.text}
                </QuestionButton>
              ))}
              {feedback ? (
                correctFeedback ? (
                  <>
                    <AnswerImage src={correct}></AnswerImage>
                    <ThoughtBubbleStyled>
                    <h4><OrangeText>¡Muy bien!</OrangeText></h4>
                    <DarkText>{question.feedbackCorrect}</DarkText>
                    </ThoughtBubbleStyled>
                  </>
                ):(
                  <>
                    <img src={Incorrecta}/>
                    <ParagraphContainer>
                    <DarkText>{question.feedbackIncorrect}</DarkText>
                    </ParagraphContainer>
                  </>
                  )
                    ) : (
                      <></>
                    )
                }
              <div style={{display:"flex", flexDirection:"row", gap:"3rem", position:"relative"}}>
          <BackButton onClick={() => handleBack(questionIndex)} />
          <NextButton onClick={() => handleNext(questionIndex)} />
              </div>
        </Container>))
      }
    </>
  )
  
}

export default Onboarding