import { Suspense, lazy } from "react"
import styles from "./RecentBlogs.module.css";

const Article = lazy(() => import("../Article/Article.jsx"));


function RecentBlogs () {

  return(
  
  <Suspense fallback = {<h6>Loading...</h6>}>

    <section className={styles.recentBlogs}>

      <h3 className={styles.recentBlogsTitle}>Recent Blogs</h3>


      <div className={styles.cardsParent}>

        <Article title = {"How to start web development as a beginner?"} logoSrc = {"/Images/html_logo.svg"} link = {"How_to_start_web_development_as_a_beginner"}/>
        <Article title = {"How to create an accordion with React JS?"} logoSrc = {"/Images/react_logo.svg"} link = {"How_to_create_an_accordion_with_React_JS"}/>
        <Article title = {"CSS Basics"} logoSrc = {"/Images/css_logo.svg"} link = {"CSS_Basics"}/>

      </div>

    </section>

    </Suspense>

  )

}


export default RecentBlogs;