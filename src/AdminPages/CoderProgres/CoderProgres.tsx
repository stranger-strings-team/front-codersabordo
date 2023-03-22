import React from 'react'
import { OrangeText } from '../../Global.style'
import { Select } from '../../pages/RegisterPage/Register.styled'
import { Div, Table, ThHeader, Tr, Td } from './CoderProgres.style'

type Props = {}

const CoderProgres = (props: Props) => {
  return (
    <div>
      <Div>
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
      </Div>
        <Table>
            <tr>
              <ThHeader>Coders</ThHeader>
              <ThHeader>Secciones completas</ThHeader>
              <ThHeader>Fecha registro</ThHeader>
            </tr>
            <Tr>
              <td>Arnau Mínguez</td>
              <Td>200000</Td>
              <td>21/03/2023</td>
            </Tr>
            <Tr>
              <td>Hel Aige</td>
              <Td>1</Td>
              <td>20/03/2023</td>
            </Tr>
            <Tr>
              <td>Rosie Bradshaw</td>
              <Td>1, 2</Td>
              <td>20/03/2023</td>
            </Tr>
            <Tr>
              <td>Sablina Angulo</td>
              <Td>1, 2, 3</Td>
              <td>19/03/2023</td>
            </Tr>
            <Tr>
              <td>Sergi Alsina</td>
              <Td>0</Td>
              <td>18/03/2023</td>
            </Tr>
          </Table>
    </div>
  )
}

export default CoderProgres