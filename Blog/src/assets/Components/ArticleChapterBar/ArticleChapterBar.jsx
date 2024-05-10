import styles from "./ArticleChapterBar.module.css";


export default function ArticleChapterBar (props) {

  const chapters = props.chapters;


  return (
    <>
      <aside>
        <div className={styles.articleBar}>



        <h6>Chapters</h6>

          <hr className={styles.chaptersHr}/>

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