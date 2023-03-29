import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  purpleBackground: '#fbcef2',
  blueBackground: '#a1e0e4',
  pinkBackground: '#fcceba',
  yellowBackground: '#fdf69a', 
  darkText: '#020100',
  orange: '#FF4700', 
  gray: '#9C9C9C',
  coral:'#FFA37F',
  inputBackground: '#f6e4dd'
}

export const GlobalStyles = createGlobalStyle`

  *{
    margin:0 auto; 
    padding: 0; 
    box-sizing: border-box; 
    text-decoration: none;
    color: ${theme.darkText};
    scroll-behavior: smooth 5s;
  }

  body{
    font-family: 'Poppins', sans-serif;
    color: ${theme.darkText};
    background-color: white;
    height: 100%;
    position: relative;
  }

  main{
    margin: 80px 0 40px 0;
  }

  h1{
    font-size: 2.25rem;
    color: ${theme.darkText};
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h2{
    font-size: 1.60rem;
    color: ${theme.darkText};
    font-weight: 700;
    margin: 1rem 0 2rem 0;
    padding: 0 0.8rem
  }

  h3{
    font-size: 1.60rem;
    color: ${theme.darkText};
    font-weight: 700;
    margin-bottom: 0;
    padding: 0 0.8rem
  }

  h4{
    font-size: 1.2rem; 
    color: ${theme.darkText};
    font-weight: 700;
    margin-bottom: 0.60rem;
    z-index: 1
  }

  h5{
    font-size: 1rem;
    color: ${theme.darkText};
    font-weight: 400;
    margin-bottom: 0.60rem;
  }

  .yellow{
    background-color: ${theme.yellowBackground};
  }

  .blue{
    background-color: ${theme.blueBackground};
  }

  .purple{
    background-color: ${theme.purpleBackground};
  }

  .pink{
    background-color: ${theme.pinkBackground};
  }
`

// -------------- GENERAL CONTAINER STYLES ---------------

export const Container = styled.div`
  display:flex; 
  flex-direction: column;
  width:90vw;
  position: relative;
  bottom: 0;
  margin: 20px auto 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Row = styled.div`
  display: flex;
`

export const RowRight=styled(Row)`
  margin-right: 0;
`

export const ParagraphContainer = styled.div`
  margin: 1rem 2rem; 
  text-align: justify;
`

export const AnswerImage = styled.img`
  width: 10rem; 
  margin: 0 0 0 auto;
`
export const Input = styled.input`
    background-color: #ffe6dc;
    border-style: none;
    border-radius: 10px;
    height: 35px;
    width: 200px;
    padding: 10px;
`


/* ------------------ GENERAL TEXT STYLES -------------------*/

export const GrayText = styled.p`
  color: ${theme.gray};
`

export const SmallGrayText = styled(GrayText)`
  font-size: 0.80rem;
`

export const XLGrayText = styled(GrayText)`
  font-size: 1.5rem; 
`

export const DarkText = styled.p`
  color: ${theme.darkText};
  z-index: 10;
`

export const OrangeText = styled.span`
  font-weight: 700;
  display: inline;
  &&&{
    color: ${theme.orange}; 
  }
`

export const TextLeft = styled.div`
  text-align: left;
  margin-left: 1rem;
`

