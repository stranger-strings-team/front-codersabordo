import styled from "styled-components";
import { theme } from "../../Global.style";

export const ThoughtBubbleStyled = styled.div`
  display:flex;
  flex-direction: column;
  background-color:${theme.blueBackground};
  padding:20px;
  border-radius:30px;
  min-width:40px;
  max-width:300px;
  min-height:40px;
  margin:20px;
  position:relative;
  align-items:center;
  justify-content:center;
  text-align:center;

  &:before,
  &:after{
    content:"";
    background-color:${theme.blueBackground};
    border-radius:50%;
    display:block;
    position:absolute;
    z-index:0;
  }

  &:before{
    width:44px;
    height:44px;
    bottom:-12px;
    left:28px;
    box-shadow:-50px 30px 0 -12px ${theme.blueBackground},
                -40px -60px 0 5px ${theme.blueBackground};
  }


  &:after{
    top:-10px;
    right:60px;
    width:30px;
    height:30px;
    box-shadow:40px 0px 0 0px ${theme.blueBackground},
                60px 70px 0 15px ${theme.blueBackground},
             -30px 0px 0 5px ${theme.blueBackground},
             10px -30px 0 -6px ${theme.blueBackground},
             40px -50px 0 -10px ${theme.blueBackground};
  }
`