import React from 'react'
import { OrangeText } from '../Global.style'
import { Select } from '../pages/RegisterPage/Register.styled'

type Props = {}

const CoderProgress = (props: Props) => {
  return (
    <div>
        <OrangeText>Progreso coders</OrangeText>
        <Select placeholder='Escuela'>
            <option value='Barcelona'>Barcelona</option>
            <option value='Xixon'>Xixon</option>
            <option value='Sevilla'>Sevilla</option>
            <option value='Madrid'>Madrid</option>
            <option value='Asturies'>Asturies</option>
            <option value='Mérida'>Mérida</option>
            <option value='Norte Online'>Norte Online</option>
          </Select>
          <table>
            <th></th>
          </table>
    </div>
  )
}

export default CoderProgress