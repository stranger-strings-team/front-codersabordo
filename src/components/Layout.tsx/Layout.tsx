import { Outlet } from "react-router";
import { NavTop } from "../NavTop/NavTop";
import { NavBar } from "../navbar/NavBar";
import { useParams } from "react-router-dom";

const Layout = () => {
  let isInGame = false;

  if ( window.location.pathname == "/onboarding"){
    isInGame = true
  } else {
    isInGame = false;
  }

  return (
    <>
      <NavTop />
      <main>
        <Outlet />
      </main>
      <NavBar inGame={isInGame} />
    </>
  )
}

export default Layout;
