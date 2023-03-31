import React, { useState, useEffect, FormEvent } from 'react'
import { Delete } from '../../../assets'
import { Spacer } from '../../../components'
import { Container, Input, OrangeText, TextLeft } from '../../../Global.style'
import { Button } from '../../GamePages/Login/LoginStyle'
import { InputDiv } from '../../GamePages/Profile/ProfileStyle'
import { BinImg, Padmin, ProfileAdminDiv, YellowDiv } from './ProfilesAdminStyle'
import { deleteUserById, getUsersRequest, postUserRequest } from "../../../services/userServices"
import { useNavigate } from "react-router-dom"


type User = {
    _id: string,
    name: string,
    surname: string,
    email: string,
    password: string,
    city: string,
    roles: ["Admin"]
}

const ProfilesAdmin = () => {

    const navigate = useNavigate()

    const [admins, setAdmins] = useState<User[]>([])

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
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const deleteAdmin = (admin: User) => {
        deleteUserById(admin._id)
            .catch()
            .then(() => {
                console.log("deleted", admin)
                location.reload()
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const loadAdmins = async () => {
            getUsersRequest()
                .catch()
                .then((response) => {
                    //console.log(response.data)
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
            <Spacer size={0} axis={"horizontal"}/>
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
        {admins.filter(admin => admin.roles.includes("Admin")).map((admin, index) => (
            <ProfileAdminDiv key={index}>
                <Padmin>{admin.name}</Padmin>
                <Padmin>{admin.email}</Padmin>
                <BinImg src={Delete} onClick={() => deleteAdmin(admin)}/>
            </ProfileAdminDiv>
        ))}
        </YellowDiv>

    </Container>
  )
}

export default ProfilesAdmin;
