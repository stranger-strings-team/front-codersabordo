import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../assets'
import { ButtonVamos } from '../../components'
import ButtonInfo from '../../unused/ButtonInfo/ButtonInfo'
import {MainDiv, Myh1, MyLogo} from '../Home/HomeStyle'


type Props = {}

const Home = (props: Props) => {
  return (
    <MainDiv>
        <MyLogo src={Logo} alt="Logo-F5"/>
        <Myh1>CODERS A BORDO</Myh1>
        <ButtonVamos/>
        <ButtonInfo/>

    </MainDiv>
  )
}

export default Home;