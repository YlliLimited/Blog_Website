import { useEffect, useState, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar (props) {
  const navbar = useRef(null);

  if (props.hide !== "false") {
    const [pastY, setPastY] = useState(0);
    const [currentY, setCurrentY] = useState(0);


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
  }


  const offCanvas = useRef(null);
  const [offCanvasStatus, setOffCanvasStatus] = useState("closed");

  function toggleOffcanvas() {
    if (offCanvasStatus === "opened") {
      offCanvas.current.style.left = "calc(0px - calc(var(--standard-padding) * 8) - 4px)";
      offCanvas.current.style.boxShadow = "none";
      setOffCanvasStatus("closed");
    } else if (offCanvasStatus === "closed") {
      offCanvas.current.style.left = "0px";
      offCanvas.current.style.boxShadow = "0px 0px 20px var(--secondary-contrast-color)";
      setOffCanvasStatus("opened");
    }
  }



  if (window.innerWidth >= 1000) {
    return (
      <>
      
        <nav>
  
          <div className={styles.navbar} ref={navbar}>
            
  
            <ul className={styles.navUl}>
                <li className={styles.navbarTitle}><Link to={"/"}><p><em>&lt;C/&gt;</em> Ylli's Blog</p></Link></li>
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
  } else if (window.innerWidth <= 999.98){
    return(
      <>
      
        <nav>
  
          <div className={styles.navbar} ref={navbar}>
            
  
            <ul className={styles.navUl}>
                <li className={styles.navbarTitle}><Link to={"/"}><p><em>&lt;C/&gt;</em> Ylli's Blog</p></Link></li>
                <li><button onClick={toggleOffcanvas} className={styles.navbarToggler}><p>|||</p></button></li>
            </ul>
  
  
          </div>


          <div className={styles.offCanvas} ref={offCanvas}>
            <ul className={styles.navUl}>
                <li><h5>Navigation</h5></li>
                <hr className={styles.offCanvasHr}/>
                <li><Link to={"/"} className={styles.navLink}><h6>Home</h6></Link></li>
                <li><Link to={"/Blog/"} className={styles.navLink}><h6>Blog</h6></Link></li>
                <li><Link to={"/Website_Inspo/"} className={styles.navLink}><h6>Website Inspo</h6></Link></li>
                <li><Link to={"/Contact/"} className={styles.navButton}><p>Contact Me</p></Link></li>
            </ul>
          </div>
  
        </nav>
  
        <Outlet/>
      
      </>
    )
  }

}