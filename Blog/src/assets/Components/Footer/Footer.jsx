import { Link, Outlet } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer () {
  return (
    <>
    <div className={styles.footerParent}>


      <h5 className={styles.footerTitle}>Ylli's Blog</h5>

      <ul className={styles.footerUl}>
        <li className={styles.footerHeader}>
          <h6>Nav</h6>
        </li>

        <li><Link to={"/"} className={styles.footerLink}><p>Home</p></Link></li>
        <li><Link to={"/Blog/"} className={styles.footerLink}><p>Blog</p></Link></li>
        <li><Link to={"/Website_Inspo/"} className={styles.footerLink}><p>Inspo</p></Link></li>
      </ul>




      <ul className={styles.footerUl}>
        <li className={styles.footerHeader}>
          <h6>Contact</h6>
        </li>

        <li>
          <Link to={"/"} className={styles.footerLink}><p>Contact Me</p></Link>
        </li>
        <li><small>yllkelmendi05@gmail.com</small></li>
      </ul>




      <ul className={styles.footerUl}>
        <li className={styles.footerHeader}>
          <h6>Social</h6>
        </li>

        <li>
          <Link to={"/"} className={styles.footerLink}><p>LinkedIn</p></Link>
        </li>
        <li><Link to={"/"} className={styles.footerLink}><p>Fiverr</p></Link></li>
      </ul>

      
    </div>

  
    <Outlet/>

    </>
  )
}

export default Footer;