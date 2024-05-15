import { Suspense, lazy } from "react";
import { Link, Outlet } from "react-router-dom";

import styles from "./MainPageContent.module.css";
const Footer = lazy(() => import("../Footer/Footer.jsx"));

export default function MainPageContent() {


  function scrollToTop () {
    window.scrollTo(0, 0);
  }


  return(

  <>

  <Suspense fallback={<h6>Loading...</h6>}>
    <div className={styles.mainPageContent}>



      {/* About Blog */}

        <section className={styles.aboutBlog}>
          <h3>About the blog</h3>
          <p> I started developing this blog in April 2024 as a way to use my newly aquired React JS skills, and as an opportunity to <em> "learn by teaching"</em>. Since then, I have been constantly working on it, and expanding it with new features and more articles. <br></br> <br></br> In this blog you will find articles covering a wide variety of coding topics across multiple programming languages, libraries, frameworks and other technologies. The topics will mostly include <em> web development</em>, <em> design</em>, <em> UI and UX</em>, <em> front-end</em> and <em> back-end</em> development and <em> many more</em>. I will try to bring a simple approach to these topics, and only touch on the most important aspects of them, while including as much examples and other illustrations as possible. <br></br> <br></br> I hope that you will find value in this blog, and <em> have a nice read</em> ! </p>

          <img src="/Images/Languages_Map.png" alt="HTML, CSS, JS, React JS mind map design" loading="lazy" />
        </section>

      {/* About Blog End */}




      {/* Read the blog */}

        <section className={styles.readBlog}>
          <h4>Have you seen enough?</h4>
          <Link onClick={() => scrollToTop()} to={"/Blog/"} className = {styles.readButton}><p>View Blog</p></Link>
        </section>  

      {/* Read the blog end */}




      {/* Footer */}
        <Footer/>
      {/* Footer End */}



    </div>
  </Suspense>

  <Outlet/>

  </>

  )
}