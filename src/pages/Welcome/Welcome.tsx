import React from 'react'
import { Hello } from '../../assets'
import { NextButton } from '../../components'
import { StyledWelcome } from './Welcome.style'


type Props = {}

const Welcome = (props: Props) => {
  return (
    <StyledWelcome>
        <h2>¡Bienvenida a Coders a Bordo!</h2>
        
            <img src={Hello} alt='Welcome image' />
            <p>
                Mediante este juego podemos conocer cómo será nuestra experiencia en Factoría F5. Es sencillo y divertido. ¡Vamos!
            </p>
       
        <NextButton />

    </StyledWelcome>
  )
}

export default Welcome