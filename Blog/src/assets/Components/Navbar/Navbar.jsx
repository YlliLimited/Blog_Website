import { useEffect, useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar () {

  
  const [pastY, setPastY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const navbar = useRef(null);


    useEffect(() => {

      function hideNavbar () {
        setCurrentY(window.scrollY);
  
        if (currentY > pastY) {
          navbar.current.style.top = "-100px";
        } else {
          navbar.current.style.top = "0px";
        }
        
        setPastY(currentY);
      }

      window.addEventListener("scroll", hideNavbar)

    return() => {
      window.removeEventListener("scroll", hideNavbar)
    };

  }, [currentY]);


  return (
    <>
    
      <nav>

        <div className={styles.navbar} ref={navbar}>
          

          <ul className={styles.navUl}>
              <li className={styles.navbarTitle}><Link to={"/"}><p>Ylli's Blog</p></Link></li>
              <li><Link to={"/"} className={styles.navLink}><p>Home</p></Link></li>
              <li><Link to={"/Blog/"} className={styles.navLink}><p>Blog</p></Link></li>
              <li><Link to={"/Website_Inspo/"} className={styles.navLink}><p>Website Inspo</p></Link></li>
              <li><Link to={"/Contact/"} className={styles.navButton}><p>Contact Me</p></Link></li>
          </ul>


        </div>

      </nav>

      <Outlet/>
    
    </>
  )

}

export default Navbar;