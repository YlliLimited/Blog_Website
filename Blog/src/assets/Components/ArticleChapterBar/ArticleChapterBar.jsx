import styles from "./ArticleChapterBar.module.css";


export default function ArticleChapterBar (props) {

  const chapters = props.chapters;


  return (
    <>
      <aside className={styles.articleBar}>
        <div>



        <h6>Chapters</h6>

          <hr className={styles.chaptersHr}/>

          <ol className={styles.chapterOl}>

            {chapters.map((chapter) => {

              const subchapters = chapter.subchapters;

              return (
              <>

                <li key={chapter.name}>
                  <a href={chapter.href}><small>{chapter.name}</small></a>
                  
                  <ul className={styles.subChapterUl}>
                    {
                      
                      subchapters.map((sub) => {
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