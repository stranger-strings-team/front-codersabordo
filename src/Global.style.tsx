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
  }

  body{
    font-family: 'Poppins', sans-serif;
    color: ${theme.darkText};
    background-color: white;
  }

  h1{
    font-size: 2.25rem;
    color: ${theme.darkText};
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  h3{
    font-size: 1.60rem;
    color: ${theme.darkText};
    font-weight: 700;
    margin-bottom: 2rem;
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

  .purpleBackground{
  background-color: ${theme.purpleBackground}
}
`

// -------------- GENERAL CONTAINER STYLES ---------------

export const Container = styled.div`
  display:flex; 
  flex-direction: column;
  width:90vw;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const ParagraphContainer = styled.div`
  margin: 1rem 2rem; 
  text-align: justify;
`

export const AnswerImage = styled.img`
  width: 10rem; 
  margin: 0 0 0 auto;
`


/* ------------------ GENERAL TEXT STYLES -------------------*/

export const GrayText = styled.p`
  color: ${theme.gray}
`

export const SmallGrayText = styled(GrayText)`
  font-size: 0.80rem
`

export const XLGrayText = styled(GrayText)`
  font-size: 1.5rem; 
`

export const DarkText = styled.p`
  color: ${theme.darkText};
  z-index: 10
`

export const OrangeText = styled.p`
  color: ${theme.orange}; 
  font-weight: 700;
  display: inline;
`
