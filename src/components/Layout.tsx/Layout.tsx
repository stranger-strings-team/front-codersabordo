import { Outlet } from "react-router";
import { NavTop } from "../NavTop/NavTop";
import { NavBar } from "../navbar/NavBar";

const Layout = () => {
  return (
    <>
      <NavTop />
      <main>
        <Outlet />
      </main>
      <NavBar />
    </>
  )
}

export default Layout;
