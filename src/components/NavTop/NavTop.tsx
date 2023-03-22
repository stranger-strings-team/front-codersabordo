import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/Home.svg";
import { StyledNavTop } from "./NavTop.style";


export const NavTop = () => {
  return (
    <>
      <StyledNavTop>
        <Link to="/"><h2>CODERS A BORDO</h2></Link>
        <Link to="/roadmap">
          <img src={home} alt="Home icon" />
        </Link>
      </StyledNavTop>
    </>
  )
}

// export default NavTop
