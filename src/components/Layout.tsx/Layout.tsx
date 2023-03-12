import { Outlet } from "react-router";
import { NavBar } from "../navbar/NavBar";

const Layout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <NavBar />
    </>
  )
}

export default Layout;
