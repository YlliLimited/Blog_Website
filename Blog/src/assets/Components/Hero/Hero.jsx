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



        <svg className={styles.wordCloud} width="800" height="429" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="429" fill="rgba(0,0,0,0)"></rect>

            <g transform="translate(620, 295)">
              <text text-anchor="middle" transform="translate(-41, 68)" style={{fontSize: '70px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>javascript</text>
              <text text-anchor="middle" transform="translate(-264, 34)" style={{fontSize: '56.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>html</text>
              <text text-anchor="middle" transform="translate(166, 110)" style={{fontSize: '56.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>css</text>
              <text text-anchor="middle" transform="translate(-64, -53)" style={{fontSize: '43px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>inspiration</text>
              <text text-anchor="middle" transform="translate(137, 1)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>web</text>
              <text text-anchor="middle" transform="translate(161, 68)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>design</text>
              <text text-anchor="middle" transform="translate(-394, 90)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>components</text>
              <text text-anchor="middle" transform="translate(-60, -25)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>react</text>
              <text text-anchor="middle" transform="translate(239, 31)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>development</text>
              <text text-anchor="middle" transform="translate(42, -16)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>frontend</text>
              <text text-anchor="middle" transform="translate(-81, 6)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>backend</text>
              <text text-anchor="middle" transform="translate(-338, 121)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>fullstack</text>
              <text text-anchor="middle" transform="translate(99, 98)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>ui</text>
              <text text-anchor="middle" transform="translate(-250, -41)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>responsive</text>
              <text text-anchor="middle" transform="translate(-258, 66)" style={{fontSize: '29.5px', userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>tutorials</text>
              <text text-anchor="middle" transform="translate(-365, 57)" style={{userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>typescript</text>
              <text text-anchor="middle" transform="translate(-387, 38)" style={{userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>code</text>
              <text text-anchor="middle" transform="translate(10, 90)" style={{userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>reviews</text>
              <text text-anchor="middle" transform="translate(187, -13)" style={{userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>api</text>
              <text text-anchor="middle" transform="translate(167, 131)" style={{userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>ux</text>
              <text text-anchor="middle" transform="translate(-318, -82)" style={{userSelect: 'none', cursor: 'default', fill: 'rgb(253, 247, 218)'}}>seo</text>
            </g>

        </svg>

        
        <div className={styles.wordGlow}></div>

      </section>


      <Outlet/>

    </>
  )
}

export default Hero;