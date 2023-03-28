import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Perfil from '../../assets/profile.png'
import Spacer from '../../components/Spacer/Spacer'
import { Container, DarkText, OrangeText } from '../../Global.style'
import { Button, Myspan } from '../Login/LoginStyle'
import { Input, InputDiv} from './ProfileStyle'

type Props = {}

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

    const handlerLogout = () => {
      sessionStorage.removeItem("access_token");
      navigate("/login")
    };

    // if (loading) {
    //   return <div>Loading...</div>;
    // }

  return (
    <Container>
      <h3><OrangeText>Tu perfil</OrangeText></h3>
        <img src={Perfil} alt="user photo"/>
        <Spacer size={12} axis='vertical' />
        <h3><DarkText>Minerva</DarkText></h3>
        <InputDiv>
        <Input type="text" placeholder='Nombre'/>
        <Input type="text" placeholder='Apellidos'/>
        <Input type="text" placeholder='Email'/>
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