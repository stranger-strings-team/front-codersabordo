import React from 'react'
import rainbow from '../../assets/image 18.png'
import { NextButton } from '../../components/NextButton'
import { StyledWelcome } from './Welcome.style'


type Props = {}

const Welcome = (props: Props) => {
  return (
    <StyledWelcome>
        <h2>¡Bienvenida a Coders a Bordo!</h2>
        
            <img src={rainbow} alt='Welcome image' />
            <p>
                Mediante este juego podemos conocer cómo será nuestra experiencia en Factoría F5. Es sencillo y divertido. ¡Vamos!
            </p>
       
        <NextButton />

    </StyledWelcome>
  )
}

export default Welcome