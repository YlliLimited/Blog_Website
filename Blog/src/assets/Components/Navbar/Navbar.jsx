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
              <li className={styles.navbarTitle}><p>Ylli's Blog</p></li>
              <li><Link to={"/"} className={styles.navLink}><p>Home</p></Link></li>
              <li><Link to={"/Blog/"} className={styles.navLink}><p>Blog</p></Link></li>
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