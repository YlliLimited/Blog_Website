import styles from "./RecentBlogs.module.css";
import { Link, Outlet } from "react-router-dom";


function RecentBlogs () {

  return (
    <>
    
      <section className={styles.recentBlogs}>


          <h3 className={styles.recentBlogsTitle}>Recent Blogs</h3>


          <div className={styles.cardsParent}>


            <Link to={"/Blog/"} className={styles.articleLink}>  
              <div className={styles.articleCard}>
                

                <div className={styles.articleContent}>

                  <img src="/Images/html_logo.svg" alt="Blog Logo Coding" className={styles.articleLogo}/>
                  <h6 className={styles.articleTitle}>
                    How to start web development as a beginner?
                  </h6>

                </div>


              </div>
            </Link>
            


            <Link to={"/Blog/"} className={styles.articleLink}>  
              <div className={styles.articleCard}>

              <img src="/Images/react_logo.svg" alt="Blog Logo Coding" className={styles.articleLogo}/>

              </div>
            </Link>


            <Link to={"/Blog/"} className={styles.articleLink}>  
              <div className={styles.articleCard}>

              <img src="/Images/javascript_logo.svg" alt="Blog Logo Coding" className={styles.articleLogo}/>

              </div>
            </Link>

          </div>


      </section>
    
    </>
  )

}

export default RecentBlogs;