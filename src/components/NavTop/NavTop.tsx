import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/Home.svg";
import { OrangeText } from "../../Global.style";
import { IconDiv } from "../icon/icon.style";
import { UserButton } from "../UserButton/UserButton";
import { StyledNavTop } from "./NavTop.style";

const token = sessionStorage.getItem("access_token")

export const NavTop = () => {
  return (
    <>
      <StyledNavTop>
        <Link to="/"><h2><OrangeText>CODERS A BORDO</OrangeText></h2></Link>
        <Link to="/roadmap">
          <IconDiv><img src={home} alt="Home icon"/></IconDiv>
        </Link>
        <UserButton loggedInUser={token} />
      </StyledNavTop>
    </>
  )
}

// export default NavTop
