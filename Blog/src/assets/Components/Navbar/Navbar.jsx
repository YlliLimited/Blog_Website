import { Outlet, Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar () {

  return (
    <>
    
      <nav>

        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/Blog/"}>Blog</Link></li>
            <li><Link to={"/Website_Inspo/"}>Website Inspo</Link></li>
        </ul>

      </nav>

      <Outlet/>
    
    </>
  )

}

export default Navbar;