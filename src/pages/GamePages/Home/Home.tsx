import React from 'react'
import { Logo } from '../../../assets'
import { ButtonVamos } from '../../../components'
import {MainDiv, Myh1, MyLogo} from './HomeStyle'


type Props = {}

const Home = (props: Props) => {
  return (
    <MainDiv>
        <MyLogo src={Logo} alt="Logo-F5"/>
        <Myh1>CODERS A BORDO</Myh1>
        <ButtonVamos/>

    </MainDiv>
  )
}

export default Home;