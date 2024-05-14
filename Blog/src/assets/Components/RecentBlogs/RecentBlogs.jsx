import { Suspense, lazy } from "react"
import styles from "./RecentBlogs.module.css";

const Article = lazy(() => import("../Article/Article.jsx"));


function RecentBlogs () {

  return(
  
  <Suspense fallback = {<h6>Loading...</h6>}>

    <section className={styles.recentBlogs}>

      <div className={styles.recentBlogsParent}>

      <h3 className={styles.recentBlogsTitle}>Recent Blogs</h3>


      <div className={styles.cardsParent}>

        <Article title = {"How to start web development as a beginner?"} logoSrc = {"html_logo.svg"} link = {"How_to_start_web_development_as_a_beginner"}/>

      </div>

      </div>

    </section>

    </Suspense>

  )

}


export default RecentBlogs;