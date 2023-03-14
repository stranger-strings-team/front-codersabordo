import React from 'react'
import rainbow from '../../assets/image 18.png'

type Props = {}

const Welcome = (props: Props) => {
  return (
    <div>
        <h2>¡Bienvenida a Coders a Bordo!</h2>
        <img src={rainbow} alt='Welcome image' />
        <p>
            Mediante este juego podemos conocer cómo será nuestra experiencia en Factoría F5. Es sencillo y divertido. ¡Vamos!
        </p>
        

    </div>
  )
}

export default Welcome