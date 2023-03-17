import React, {useEffect, useState} from 'react'
import QuestionButton from '../../components/QuestionButton/QuestionButton'
import { BlueButton, PinkButton, PurpleButton, YellowButton } from '../../components/QuestionButton/questionButton.style'
import { ParagraphContainer, AnswerImage, Container, DarkText, GlobalStyles, OrangeText } from '../../Global.style'
import correct from '../../assets/correct.png'
import {questionServices} from '../../services/questionServices'
import { ThoughtBubbleStyled } from '../../components/ThoughtBubble/ThoughtBubble.style'
import { NextButton } from '../../components/NextButton'
import  Incorrecta  from '../../assets/incorrecta.png'


type Props = {};

type QuestionsType = {_id: string, question:string, answer:[{text:string, isCorrect:boolean}], type:string, section:string, feedbackCorrect:string, feedbackIncorrect:string}

function Onboarding (props: Props) {

  const [show, setShow] = useState(true);

  const [questions, setQuestions] = useState<QuestionsType[]>([])

  
  useEffect(() => {
  async function loadQuestions () {
      const response = await questionServices();
      setQuestions(response.data);
    };
  loadQuestions();
  }, [])

 return (
    <>
    
    {questions.filter((question)=>question.section == "Sección 1 - Compromisos").map((question, index)=>(

      <Container key={index}>

        <h3>{question.question}</h3>
        {/* {show ? (
        <> */}
            {question.answer.map((answer, index) =>(<BlueButton onClick={()=>setShow(false)} key={index}>{answer.text}</BlueButton>))}
       
            
          {/* </>
        ):( */}
          {/* <> */}
            <AnswerImage src={correct}></AnswerImage>
            <ThoughtBubbleStyled>
              <h4><OrangeText>¡Muy bien!</OrangeText></h4>
              <DarkText>{question.feedbackCorrect}</DarkText>
            </ThoughtBubbleStyled>

            
            
            <img src={Incorrecta}/>
            <ParagraphContainer>
                <DarkText>{question.feedbackIncorrect}</DarkText>
              </ParagraphContainer>
              <NextButton/>
            
          {/* </>
      
        )} */}
        
      </Container>))
    }
    </>
    )
  
}

export default Onboarding