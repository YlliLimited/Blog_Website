import { useEffect, useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar () {

  
  const [pastY, setPastY] = useState(window.scrollY);
  const navbar = useRef(null);

    useEffect(() => {
      window.addEventListener("scroll", () => {

        let currentY = window.scrollY;
        console.log(currentY);

        if (currentY > pastY) {
          navbar.current.style.top = "-100px";
        } else {
          navbar.current.style.top = "0px";
        }
        
        setPastY(currentY);
    });


    return(
      window.addEventListener("scroll", () => {
          console.log(currentY);
          setCurrentY(window.scrollY);

          if (currentY > pastY) {
            navbar.current.style.top = "-100px";
          } else {
            navbar.current.style.top = "0px";
          }
          
          setPastY(currentY);
        }
      )
    )

  }, []);


  return (
    <>
    
      <nav>

        <div className={styles.navbar} ref={navbar}>
          

          <ul className={styles.navUl}>
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