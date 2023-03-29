import React, { useEffect, useState } from 'react'
import { Container, OrangeText } from '../../Global.style'
import { Select } from '../../pages/RegisterPage/Register.styled'
import { Div, StyledPadmin, StyledProfileAdminDiv, Table, ThHeader, Label, P } from './CoderProgres.style'
import { getUsersRequest } from '../../services/userServices'

type User = {
  _id: string,
  name: string,
  surname: string
  password: string,
  email: string,
  city: string,
  roles: [string],
  progress: [boolean],
  openQuestion: string
}

const CoderProgres = () => {

  const [users, setUsers] = useState<User[]>([])
  
  const [cityQuery, setCityQuery] = useState("Barcelona")

  const filteredUsers = users.filter((user: User) => user.city == cityQuery)

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setCityQuery(e.target.value)
  }

  const getProgress = (user: User) => {
    let progress = ""
    user.progress.forEach((section, i) => {
      if (section == true){
        progress += (i+1+", ")
      }
      
    });
    return progress.slice(0, progress.length-2)
  }

  useEffect(() => {
    const loadUsers = async () => {
      getUsersRequest()
        .catch()
        .then((response) => {
          setUsers(response.data)
        })
        .catch(err => console.log(err))
    }
    loadUsers()
  }, [])

  return (
    <Container>
      <Div>
        <P><OrangeText>Coders</OrangeText></P>
        <Label htmlFor="city">Filtrar por ciudad</Label>
        <Select name="city" placeholder='Escuela' onChange={(e) => handleChange(e)}>
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
          <ThHeader>Coders</ThHeader>
          <ThHeader>Secciones <br/>completas</ThHeader>
      </Table>
      {filteredUsers.map((user, index) => (
        <StyledProfileAdminDiv key={index}>
          <StyledPadmin>{user.name}</StyledPadmin>
          <StyledPadmin>{getProgress(user)}</StyledPadmin>
        </StyledProfileAdminDiv>
      ))}
    </Container>
  )
}

export default CoderProgres