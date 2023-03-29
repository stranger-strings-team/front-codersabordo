import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/Home.svg";
import { OrangeText } from "../../Global.style";
import { IconDiv } from "../icon/icon.style";
import { UserButton } from "../UserButton/UserButton";
import { StyledNavTop, H2 } from "./NavTop.style";

const token = sessionStorage.getItem("access_token")

export const NavTop = () => {
  return (
    <>
      <StyledNavTop>
        <Link to="/"><H2><OrangeText>CODERS A BORDO</OrangeText></H2></Link>
        <IconDiv to="/roadmap"><img src={home} alt="Home icon"/></IconDiv>
        <UserButton loggedInUser={token} />
      </StyledNavTop>
    </>
  )
}

// export default NavTop
