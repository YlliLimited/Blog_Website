import styles from "./Hero.module.css";
import { Link, Outlet } from "react-router-dom";

function Hero () {
  return (
    <>

      <section id={styles.hero}>

        <div className= {styles.heroContent}>

          <h1 className={styles.heroTitle}>Ylli's <em>{"<Code/>"}</em> Blog</h1>
          <Link to={"/Blog/"} className = {styles.heroButton}><p>View Blogs</p>          
          </Link>

        </div>  
        
        <img src="../../../../public/Images/word-cloud.svg" alt="" className={styles.wordCloud}/>

        <div className={styles.wordGlow}></div>

      </section>


      <Outlet/>

    </>
  )
}

export default Hero;