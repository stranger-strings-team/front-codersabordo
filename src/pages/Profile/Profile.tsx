import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Input, DarkText, OrangeText } from '../../Global.style'
import { P3p } from '../../pages/Profile/ProfileStyle'
import { InputDiv} from './ProfileStyle'
import { Button, Myspan } from '../Login/LoginStyle'
import jwt_decode from "jwt-decode"
import { findOneById } from '../../services/userServices'
import { Spacer } from '../../components'
import { Profiles } from '../../assets'

type Auth = {
  email: string,
  _id: string,
  roles: string[]
}

//type UserTypes = {name: string, surname: string, email: string}

const Profile = () => {

    const navigate = useNavigate();

    // const [user, setUser] = useState<UserTypes>();
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   const token = sessionStorage.getItem('access_token');
    //   if (!token) {
    //     navigate('/login');
    //     return;
    //   }

    //   fetch('https://localhost:4000/api/user', {
    //     headers: {
    //       Authorisation: `Bearer ${token}`,
    //     },
    //   })
    //   .then((response) => {
    //     if(!response.ok) {
    //       throw new Error('Failed to retrieve user data');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setUser(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     setLoading(false);
    //   });
    // }, [navigate]);

    const [auth, setAuth] = useState<Auth | null>(null)

    const [user, setUser] = useState({
      "name": "",
      "surname": "",
      "email": "",
      "password": "",
      "city":"",
      "roles":[""]
    })

    const handlerLogout = () => {
      sessionStorage.removeItem("access_token");
      navigate("/login")
    };

    // if (loading) {
    //   return <div>Loading...</div>;
    // }

    useEffect(() => {
      const authenticateUser = async () => {
        const token = sessionStorage.getItem("access_token")
        if(!token){
          console.log("no token found")
          return
        }
        const decodedToken: {email: string; sub: string; roles: string[]} = jwt_decode(token)
        //console.log("email: ", decodedToken.email)

        const authData = {
          email: decodedToken.email,
          _id: decodedToken.sub,
          roles: decodedToken.roles
        }

        try {
          const userData = await findOneById(authData._id)
          setAuth(userData)
          setUser(userData)
          //console.log("userData: ", auth)
        }
        catch (error) {
          console.log(error)
          setAuth(null)
        }
      }
      authenticateUser()
    })

  return (
    <Container>
      <h3><OrangeText>Tu perfil</OrangeText></h3>
        <img src={Profiles} alt="user photo"/>
        <Spacer size={12} axis='vertical' />
        <h3><DarkText>{user.name}</DarkText></h3>
        <InputDiv>
        <Input type="text" placeholder={user.name}/>
        <Input type="text" placeholder={user.surname}/>
        <Input type="text" placeholder={user.email}/>
        </InputDiv>
        <p><Link to="/create-password">Cambiar contraseña</Link></p>
        <Button onClick={handlerLogout}>Cerrar sesión</Button>
        {/* <h3>
          <OrangeText>Tu perfil</OrangeText>
        </h3>
        <img src={Perfil} alt="user photo"/>
        <Spacer size={15} axis='vertical' />
        {user && (
          <>
            <h3>{`${user.name} ${user.surname}`}</h3>
            <InputDiv>
              <Input type="text" placeholder='Nombre' defaultValue={user.name}/>
              <Input type="text" placeholder='Apellidos' defaultValue={user.surname}/>
              <Input type="text" placeholder='Email' defaultValue={user.email}/>
            </InputDiv>
          </>
        )}
        <p>
          <Link to="/create-password">Cambiar contraseña</Link>
        </p>
        <Button onClick={handlerLogout}>Cerrar sesión</Button> */}
    </Container>
  )
}

export default Profile;