import { lazy, useState } from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
const BlogsToLoad = lazy(() => import("../Components/BlogsToLoad/BlogsToLoad.jsx"));
const Footer = lazy(() => import("../Components/Footer/Footer.jsx"));


function Blog () {

  
  const [blogsToLoad, setBlogsToLoad] = useState("all");

  return (

    <>
    
      <Navbar/>

      <section id="blogsSection">

        <h3 className="allBlogsTitle">ALL BLOGS</h3>

        

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