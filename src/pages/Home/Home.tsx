import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import ButtonVamos from '../../components/ButtonVamos/ButtonVamos'
import ButtonInfo from '../../components/ButtonInfo/ButtonInfo'
import {MainDiv, Myh1, MyLogo} from '../Home/HomeStyle'


type Props = {}

const Home = (props: Props) => {
  return (
    <MainDiv>
        <MyLogo src={logo} alt="Logo-F5"/>
        <Myh1>CODERS A BORDO</Myh1>
        <ButtonVamos/>
        <ButtonInfo/>

    </MainDiv>
  )
}

export default Home;