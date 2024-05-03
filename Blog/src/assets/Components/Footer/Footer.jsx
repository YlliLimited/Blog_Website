import { Link, Outlet } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer () {
  return (
    <>

    <div className="footerParent">

      <ul className={styles.footerUl}>
        <li className={styles.footerHeader}>
          <h6>Nav</h6>
        </li>

        <li>
          <Link to={"/"}><p>Home</p></Link>
        </li>
        <li><Link to={"/Blog/"}><p>Blog</p></Link></li>
        <li><Link to={"/Website_Inspo/"}><p>Inspo</p></Link></li>
      </ul>




      <ul className={styles.footerUl}>
        <li className={styles.footerHeader}>
          <h6>Contact</h6>
        </li>

        <li>
          <Link to={"/"}><p>Contact Me</p></Link>
        </li>
        <li><p>yllkelmendi05@gmail.com</p></li>
        <li><Link to={"/Website_Inspo/"}><p>Inspo</p></Link></li>
      </ul>




      <ul className={styles.footerUl}>
        <li className={styles.footerHeader}>
          <h6>Nav</h6>
        </li>

        <li>
          <Link to={"/"}><p>Home</p></Link>
        </li>
        <li><Link to={"/Blog/"}><p>Blog</p></Link></li>
        <li><Link to={"/Website_Inspo/"}><p>Inspo</p></Link></li>
      </ul>

    </div>
  
    <Outlet/>

    </>
  )
}

export default Footer;