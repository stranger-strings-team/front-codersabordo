import React from 'react'
import { OrangeText } from '../../Global.style'
import { Select } from '../../pages/RegisterPage/Register.styled'
import { Div, StyledPadmin, StyledProfileAdminDiv, Table, ThHeader } from './CoderProgres.style'

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
          </Table>
            <StyledProfileAdminDiv>
            <StyledPadmin>Arnau Minguez </StyledPadmin>
            <StyledPadmin>20000</StyledPadmin>
            <StyledPadmin>23/03/2023</StyledPadmin>
            </StyledProfileAdminDiv>
            <StyledProfileAdminDiv>
            <StyledPadmin>Rosie Bradshaw </StyledPadmin>
            <StyledPadmin>1, 2, 3</StyledPadmin>
            <StyledPadmin>22/03/2023</StyledPadmin>
            </StyledProfileAdminDiv>
            <StyledProfileAdminDiv>
            <StyledPadmin>Hel Aige </StyledPadmin>
            <StyledPadmin>1, 2</StyledPadmin>
            <StyledPadmin>21/03/2023</StyledPadmin>
            </StyledProfileAdminDiv>
            <StyledProfileAdminDiv>
            <StyledPadmin>Sablina Angulo </StyledPadmin>
            <StyledPadmin>1</StyledPadmin>
            <StyledPadmin>20/03/2023</StyledPadmin>
            </StyledProfileAdminDiv>
            <StyledProfileAdminDiv>
            <StyledPadmin>Sergi Alsina </StyledPadmin>
            <StyledPadmin>0</StyledPadmin>
            <StyledPadmin>19/03/2023</StyledPadmin>
            </StyledProfileAdminDiv>
    </div>
  )
}

export default CoderProgres