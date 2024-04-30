import styles from "./Hero.module.css";
import { Link, Outlet } from "react-router-dom";

function Hero () {
  return (
    <>

      <section id={styles.hero}>

        <div className= {styles.heroContent}>

          <h1 className={styles.heroTitle}>Ylli's <em>{"<Code/>"}</em> Blog</h1>
          <Link to={"/Blog/"} className = {styles.heroButton}><p>View Blog</p>          
          </Link>

        </div>  


        <img src="../../../public/Images/word-cloud.svg" alt="Word Cloud" className={styles.wordCloud} />
        <div className={styles.wordGlow}></div>

      </section>


      <div style={{position: "relative", width: "100%", height: "0.1px"}}></div>


      <Outlet/>

    </>
  )
}

export default Hero;