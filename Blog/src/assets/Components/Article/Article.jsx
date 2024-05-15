import styles from "./Article.module.css";
import { useEffect, useRef } from "react";
import { Link, Outlet } from "react-router-dom";


function Article (props) {

  const title= props.title;
  const logoSrc = props.logoSrc;
  const link = props.link;
  const article = useRef(null);


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        article.current.style.animation = "fadeInMoveUp 0.4s ease-out";
      }
    });
  });

  function scrollToTop () {
    window.scrollTo(0, 0);
  }


  
  useEffect(() => {

    observer.observe(article.current);

  }, []);


  return (
    <>
    
      <Link onClick={() => scrollToTop()} to={`/Blog/${link}`} className={styles.articleLink}>  
        <div className={styles.articleCard} ref={article}>


          <div className={styles.articleContent}>

            <img src={`/Images/${logoSrc}`} alt="Blog Logo Coding" className={styles.articleLogo}/>
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