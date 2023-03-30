import React, { useState, useEffect, FormEvent } from 'react'
import { Delete } from '../../assets'
import { Spacer } from '../../components'
import { Container, Input, OrangeText, TextLeft } from '../../Global.style'
import { Button } from '../Login/LoginStyle'
import { InputDiv } from '../Profile/ProfileStyle'
import { BinImg, Padmin, ProfileAdminDiv, YellowDiv } from './ProfilesAdminStyle'
import { postUserRequest } from "../../services/userServices"
import { useNavigate } from "react-router-dom"


type User = {
    name: string,
    surname: string,
    email: string,
    password: string,
    city: string,
    roles: ["Admin"]
}

const ProfilesAdmin = () => {

    const navigate = useNavigate()

    const [admins, setAdmins] = useState<User[]>()

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        city: "",
        roles: ["Admin"]
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(user)
        postUserRequest(user)
            .catch()
            .then((response) => {
                console.log(response)
                navigate("/admin")
            })
            .catch(err => console.log(err))
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };

    useEffect(() => {
        const loadAdmins = async () => {
            getUsersRequest()
                .catch()
                .then((response) => {
                    setAdmins(response.data)
                })
                .catch(err => console.log(err))
        }
        loadAdmins()
    }, [])

  return (
    <Container>
        <h3><OrangeText>Perfiles admin</OrangeText></h3>
        
        <p>Crear un nuevo perfil admin</p>
        <Spacer size={10} axis='vertical' />
        <InputDiv onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
            <Input 
                name="name" 
                type="text" 
                onChange={handleInput}
                placeholder='Nombre' 
            />
            <label htmlFor="surname"></label>
            <Input 
                name="surname" 
                type="text" 
                onChange={handleInput}
                placeholder='Apellidos' 
            />
            <label htmlFor="email"></label>
            <Input 
                name="email" 
                type="email" 
                onChange={handleInput}
                placeholder='Email' 
            />
            <label htmlFor="password"></label>
            <Input 
                name="password" 
                type="password" 
                onChange={handleInput}
                placeholder='Contraseña' 
            />
          <Input 
              name="city" 
              type="text" 
              list="city" 
              placeholder='Escuela' 
              onChange={handleInput} 
              required 
          />
          <datalist id="city">
            <option value='Barcelona'>Barcelona</option>
            <option value='Xixon'>Xixon</option>
            <option value='Sevilla'>Sevilla</option>
            <option value='Madrid'>Madrid</option>
            <option value='Asturies'>Asturies</option>
            <option value='Mérida'>Mérida</option>
            <option value='Norte Online'>Norte Online</option>
            </datalist>
            <Button>Añadir</Button>
        </InputDiv>
        <Spacer size={30} axis='vertical' />
        <p>Perfiles admin</p>
        <YellowDiv>
        {admins.filter(admin => admin.roles.includes("Admin")).map(() => {
            <ProfileAdminDiv>
            <Padmin>{admin.name}</Padmin>
            <Padmin>{admin.email}</Padmin>
            <BinImg src={Delete}/>    
            </ProfileAdminDiv>    
        })}
        <ProfileAdminDiv>
            <Padmin>Judith Lloveras </Padmin>
            <Padmin>judith@lloveras.com</Padmin>
            <BinImg src={Delete}/>
            
            </ProfileAdminDiv>
        <ProfileAdminDiv>
            <Padmin>David Picó</Padmin>
            <Padmin>david@pico.com</Padmin>
            <BinImg src={Delete}/>
            
        </ProfileAdminDiv>
        </YellowDiv>

    </Container>
  )
}

export default ProfilesAdmin;
