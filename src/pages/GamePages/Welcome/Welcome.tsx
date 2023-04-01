import React from 'react'
import { Hello } from '../../../assets'
import { StyledWelcome } from './Welcome.style'
import { useNavigate } from 'react-router-dom'
import { StartButton } from '../../../components/StartButton/StartButton'


type Props = {}

const Welcome = (props: Props) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/open-question")
  }

  return (
    <StyledWelcome>
        <h2>¡Bienvenida a Coders a Bordo!</h2>
        
            <img src={Hello} alt='Welcome image' />
            <p>
                Mediante este juego podemos conocer cómo será nuestra experiencia en Factoría F5. Es sencillo y divertido. ¡Vamos!
            </p>
       
        <StartButton onClick={handleClick} />

    </StyledWelcome>
  )
}

export default Welcome