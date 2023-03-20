import React, {useEffect, useState} from 'react'
// import QuestionButton from '../../components/QuestionButton/QuestionButton'
import { BlueButton, PinkButton, PurpleButton, YellowButton, QuestionButton } from '../../components/QuestionButton/questionButton.style'
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

function Onboarding (props: Props) {

  const [show, setShow] = useState(true);

  const [questions, setQuestions] = useState<QuestionsType[]>([])

  const filteredQuestions = questions.filter((question)=>question.section == "Sección 1 - Compromisos")

  const [feedback, setFeedback] = useState(true);

  const [checked, setChecked] = useState([false, false, false, false])

  const [questionIndex, setQuestionIndex] = useState(0)

  const handleBack = (i: number) =>{
    if (questionIndex <= 0) {
      setQuestionIndex(questionIndex)
    } else {
      setQuestionIndex(questionIndex-1)
    }
  }

  const handleNext = (i: number) => {
    if (questionIndex >= filteredQuestions.length-1){
      setQuestionIndex(questionIndex)
    } else {
      setQuestionIndex(questionIndex+1)
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
                  setFeedback(false)
                  if(question.answer[index].isCorrect===true) {
                    setShow(false)}
                }}
                key={index}
                className={getColor(index)}>
                  {answer.text}
                </QuestionButton>
              ))}
              {feedback ? (
                <></>
                ) : (
                show? (
                  <>
                    <img src={Incorrecta}/>
                    <ParagraphContainer>
                    <DarkText>{question.feedbackIncorrect}</DarkText>
                    </ParagraphContainer>
                    <NextButton/>
                  </>
                ):(
                    <>
                      <AnswerImage src={correct}></AnswerImage>
                      <ThoughtBubbleStyled>
                      <h4><OrangeText>¡Muy bien!</OrangeText></h4>
                      <DarkText>{question.feedbackCorrect}</DarkText>
                      </ThoughtBubbleStyled>
                    </>
                  )
                )
              }
              <div style={{display:"flex", flexDirection:"row", gap:"3rem", position:"relative"}}>
          <BackButton onClick={() => handleBack(questionIndex)}/>
          <NextButton onClick={() => handleNext(questionIndex)}/>
              </div>
        </Container>))
      }
    </>
  )
  
}

export default Onboarding