import { useEffect, useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar () {

  
  let pastY = window.scrollY;
  const navbar = useRef(null);

    useEffect(() => {
      window.addEventListener("scroll", () => {

        let currentY = window.scrollY;

        if (currentY > pastY) {
          navbar.current.style.top = "-100px";
        } else {
          navbar.current.style.top = "0px";
        }
        
        pastY = currentY;
        console.log(pastY > currentY ? "false": "true");
    });


    return(
      window.addEventListener("scroll", () => {

        let currentY = window.scrollY;

        if (currentY > pastY) {
          navbar.current.style.top = "-100px";
        } else {
          navbar.current.style.top = "0px";
        }
        
        pastY = currentY;
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