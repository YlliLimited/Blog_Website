import { useState, useRef } from "react";
import styles from "./ArticleChapterBar.module.css";


export default function ArticleChapterBar (props) {

  const chapters = props.chapters;

  const chapterBar = useRef(null);
  const chapterToggle = useRef(null);

  const [chapterBarStatus, setChapterBarStatus] = useState("opened");

  function toggleChaptersBar() {
    if (chapterBarStatus === "opened") {
      chapterBar.current.style.left = "calc(0px - calc(clamp(100px, 10vw, 10vw) + clamp(39px, 3.9vw, 3.9vw)))";
      chapterToggle.current.style.transform = "rotate(-90deg)";
      setChapterBarStatus("closed");
    } else if (chapterBarStatus === "closed"){
      chapterBar.current.style.left = "0px";
      chapterToggle.current.style.transform = "rotate(0deg)"
      setChapterBarStatus("opened");
    }
  }


  return (
    <>
      <aside className={styles.aside}>
        <div className={styles.articleBar} ref={chapterBar}>

          
        <h6>Chapters</h6>

          <hr className={styles.chaptersHr}/>

          <button className={styles.chaptersClose}  onClick={toggleChaptersBar} ref={chapterToggle}><small>|||</small></button>


          <ol className={styles.chapterOl}>

            {chapters.map((chapter) => {

              return (
              <>

                <li key={chapter.name}>
                  <a href={chapter.href}><small>{chapter.name}</small></a>
                  
                  <ul className={styles.subChapterUl}>
                    {
                      
                      chapter.subchapters.map((sub) => {
                        return (
                          <li key={sub.name}><a href={sub.href}><span className="smaller">{sub.name}</span></a></li>
                        )
                      })

                    }
                  </ul>
                
                </li>



              </>
            
              )
            })}

          </ol>


        </div>
      </aside>
    </>
  )
}