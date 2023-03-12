import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.png'
import ButtonVamos from '../../components/ButtonVamos/ButtonVamos'
import ButtonInfo from '../../components/ButtonInfo/ButtonInfo'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <img src={logo} alt="Logo-F5"/>
        <h1>CODERS A BORDO</h1>
        <ButtonVamos/>
        <ButtonInfo/>

    </div>
  )
}

export default Home;