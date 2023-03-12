import React from 'react'
import { BlueButton, PinkButton, PurpleButton, YellowButton } from './questionButton.style'
import { theme } from '../../Global.style';


type Props = {}

const QuestionButton = (props: Props) => {
  return (
    <>
      <PurpleButton>Con la cámara y el micrófono encendido</PurpleButton>
      <BlueButton>Con la cámara encendida y el micrófono apagado</BlueButton>
      <PinkButton>Con la cámara apagada y el micrófono encendido</PinkButton>
      <YellowButton>Es indiferente</YellowButton>
    </>
  )
}

export default QuestionButton