import styles from "./RecentBlogs.module.css";
import { Link, Outlet } from "react-router-dom";


function RecentBlogs () {

  return (
    <>
    
      <section className={styles.recentBlogs}>


          <h4 className={styles.recentBlogsTitle}>Recent Blogs</h4>


      </section>
    
    </>
  )

}

export default RecentBlogs;