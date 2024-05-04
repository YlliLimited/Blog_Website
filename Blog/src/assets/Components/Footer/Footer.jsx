import { Link, Outlet } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer () {
  return (
    <>
    <div className={styles.footerParent}>
      <div className={styles.footerOutline}>


        <h5 className={styles.footerTitle}><em>-</em> Ylli's Blog <em>-</em></h5>

        <ul className={styles.footerUl}>
          <li>
            <h6 className={styles.footerHeader}>Nav</h6>
          </li>

          <li><Link to={"/"} className={styles.footerLink}><p>Home</p></Link></li>
          <li><Link to={"/Blog/"} className={styles.footerLink}><p>Blog</p></Link></li>
          <li><Link to={"/Website_Inspo/"} className={styles.footerLink}><p>Inspo</p></Link></li>
        </ul>




        <ul className={styles.footerUl}>
          <li>
            <h6 className={styles.footerHeader}>Contact</h6>
          </li>

          <li>
            <Link to={"/"} className={styles.footerLink}><p>Contact Me</p></Link>
          </li>
          <li><small>yllkelmendi05@gmail.com</small></li>
        </ul>




        <ul className={styles.footerUl}>
          <li>
            <h6 className={styles.footerHeader}>Social</h6>
          </li>

          <li>
            <Link to={"/"} className={styles.footerLink}><p>LinkedIn</p></Link>
          </li>
          <li><Link to={"/"} className={styles.footerLink}><p>Fiverr</p></Link></li>
        </ul>


      </div>

      <div className={styles.footerCopyright}>
        <small>&copy; Yll Kelmendi 2024 - {new Date().getFullYear()}</small>
      </div>

    </div>

  
    <Outlet/>

    </>
  )
}

export default Footer;