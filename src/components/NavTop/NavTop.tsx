import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/Home.svg";
import { UserButton } from "../UserButton/UserButton";
import { StyledNavTop } from "./NavTop.style";

const token = sessionStorage.getItem("access_token")

export const NavTop = () => {
  return (
    <>
      <StyledNavTop>
        <Link to="/"><h2>CODERS A BORDO</h2></Link>
        <Link to="/roadmap">
          <img src={home} alt="Home icon" />
        </Link>
        <UserButton loggedInUser={token} />
      </StyledNavTop>
    </>
  )
}

// export default NavTop
