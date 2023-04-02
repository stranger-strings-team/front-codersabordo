import React from 'react'
import { useNavigate } from 'react-router';
import {StyledButtonVamos} from './ButtonVamos.style'

type Props = {}

export default function ButtonVamos () {

  const navigate = useNavigate();
  const isLoggedIn = !!sessionStorage.getItem('access_token')

  const handleClick = () => {
    if (isLoggedIn) {
      navigate('/roadmap')
    } else {
      navigate('/login');
    }
  }

  return (
    <StyledButtonVamos onClick={handleClick} role='button'>¡Vamos!</StyledButtonVamos>
  )
}



