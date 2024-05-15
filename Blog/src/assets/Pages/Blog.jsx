import { lazy, useState } from "react";
import { Helmet } from "react-helmet";

import Navbar from "../Components/Navbar/Navbar.jsx";
const BlogsToLoad = lazy(() => import("../Components/BlogsToLoad/BlogsToLoad.jsx"));
const Footer = lazy(() => import("../Components/Footer/Footer.jsx"));


function Blog () {

  const [blogsToLoad, setBlogsToLoad] = useState("all");

  return (

    <>

      {/* Metadata */}
      <Helmet>
        <title>Ylli's Code Blog - Blog</title>

        <meta description = "Free web development and coding tutorials, blogs and articles. The technologies used include: HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql" />
        <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql, Coding, Programming, Blog, Tutorial, Yll Kelmendi, Ylli's Blog, Design, Web Development, Frontend, Backend, Fullstack, SEO, UI, UX" />
        <meta name="author" content="Yll Kelmendi" />
      </Helmet>
      {/* Metadata End */}
    
      <Navbar/>

      <section id="blogsSection">

        <h3 className="allBlogsTitle"><em>- </em>ALL BLOGS<em> -</em></h3>

        

        <hr className="blogsHr"/>

        <nav>
          <div className="filteringParent">

            <h6>Filter:</h6>

            <ul>
              <li>
                <button className="filteringButton1" onClick={() => setBlogsToLoad("all")}>Reset</button>
              </li>

              <li>
              <button className="filteringButton" onClick={() => setBlogsToLoad("html")}>HTML</button>
              </li>

              <li>
              <button className="filteringButton" onClick={() => setBlogsToLoad("css")}>CSS</button>
              </li>

              <li>
              <button className="filteringButton" onClick={() => setBlogsToLoad("javascript")}>JavaScript</button>
              </li>

              <li>
              <button className="filteringButton" onClick={() => setBlogsToLoad("react")}>React</button>
              </li>

              <li>
              <button className="filteringButton" onClick={() => setBlogsToLoad("other")}>Other</button>
              </li>
            </ul>

          </div>
        </nav>

        <hr className="blogsHr"/>


        <div className="articlesParent">

          <BlogsToLoad toLoad = {blogsToLoad}/>

        </div>

      </section>


      <Footer />

    </>

  )

}

export default Blog;