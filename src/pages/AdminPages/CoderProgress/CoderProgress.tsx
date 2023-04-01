
import React, { useEffect, useState } from 'react'
import { Info } from '../../../assets'
import { Container, OrangeText } from '../../../Global.style'
import { getUsersRequest } from '../../../services/userServices'
import { Select } from '../../GamePages/RegisterPage/Register.styled'
import { Div, P, ThHeader, StyledProfileAdminDiv, StyledPadmin, StyledPadminAnswer, Img, Label, Table, Button } from './CoderProgress.style'


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

const CoderProgress = () => {

  const [users, setUsers] = useState<User[]>([])
  
  const [cityQuery, setCityQuery] = useState("Barcelona")

  const filteredUsers = users.filter((user: User) => user.city == cityQuery).reverse().filter(user => !user.roles.includes("Admin"))

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //console.log(e.target.value)
    setCityQuery(e.target.value)
  }

  const handleClick = (user: User) => {
    console.log(user.name)
    if(user.openQuestion == undefined){
      alert("Sin respuesta.")
    } else {
      alert(user.openQuestion)
    }
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
        <Label htmlFor="city">Filtrar por escuela</Label>
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
          <ThHeader>Coder</ThHeader>
          <ThHeader>Secciones <br/>completas</ThHeader>
          <ThHeader></ThHeader>
      </Table>
      {filteredUsers.map((user, index) => (
        <StyledProfileAdminDiv key={index}>
          <StyledPadmin>{user.name + " " + user.surname}</StyledPadmin>
          <StyledPadminAnswer>{getProgress(user)}</StyledPadminAnswer>
          <Button onClick={() => handleClick(user)}><Img src={Info}/></Button>
        </StyledProfileAdminDiv>
      ))}
    </Container>
  )
}

export default CoderProgress