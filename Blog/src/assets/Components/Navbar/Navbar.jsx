import { Outlet, Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar () {

  return (
    <>
    
      <nav>

        <div className={styles.navbar}>
          

          <ul className={styles.navUl}>
              <li><Link to={"/"} className={styles.navLink}><p>Home</p></Link></li>
              <li><Link to={"/Blog/"} className={styles.navLink}><p>Blogs</p></Link></li>
              <li><Link to={"/Website_Inspo/"} className={styles.navLink}><p>Website Inspo</p></Link></li>
              <li><a href="" className={styles.navButton}><p>Contact Me</p></a></li>
          </ul>


        </div>

      </nav>

      <Outlet/>
    
    </>
  )

}

export default Navbar;