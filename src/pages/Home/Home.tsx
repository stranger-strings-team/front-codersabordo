import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import { StyledButtonVamos } from '../../components/ButtonVamos/ButtonVamos.style'
import {StyledButtonInfo} from '../../components/ButtonInfo/ButtonInfo.style'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
         <img src={logo} alt="Logo-F5"/>
        <h1>CODERS A BORDO</h1>
        <StyledButtonVamos></StyledButtonVamos>
        <StyledButtonInfo></StyledButtonInfo>

    </div>
  )
}

export default Home