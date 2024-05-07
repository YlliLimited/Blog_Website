import styles from "./Article.module.css";
import { Link, Outlet } from "react-router-dom";


function Article (props) {

  const title= props.title;
  const logoSrc = props.logoSrc;
  const link = props.link;

  return (
    <>
    
      <Link to={`/Blog/${link}`} className={styles.articleLink}>  
        <div className={styles.articleCard}>


          <div className={styles.articleContent}>

            <img src={logoSrc} alt="Blog Logo Coding" className={styles.articleLogo}/>
            <h6 className={styles.articleTitle}>
              {title}
            </h6>

          </div>


        </div>
      </Link>
    

      <Outlet/>

    </>
  )
}

export default Article;