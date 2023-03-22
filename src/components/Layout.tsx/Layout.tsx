import { Outlet } from "react-router";
import { NavTop } from "../NavTop/NavTop";
import { NavBar } from "../navbar/NavBar";
import { To, useParams, useResolvedPath } from "react-router-dom";

const Layout = (to: To) => {
  let isInGame = false;
  const path = useResolvedPath(to)
  if ( path.pathname == "/onboarding"){
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
