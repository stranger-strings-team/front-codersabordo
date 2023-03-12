import React from "react";
import { Link } from "react-router-dom";
import home from "../../assets/Home.svg";
import { StyledHeader } from "./Header.style";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <StyledHeader>
        <h3>CODERS A BORDO</h3>
        <Link to="/">
          <img src={home} alt="Home icon" />
        </Link>
      </StyledHeader>
    </>
  );
};

export default Header;
