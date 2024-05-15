import { Suspense, lazy } from "react";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "../Components/Navbar/Navbar.jsx";
const RecentBlogs = lazy(()=> import("../Components/RecentBlogs/RecentBlogs.jsx"));
const MainPageContent = lazy(()=> import("../Components/MainPageContent/MainPageContent.jsx"));

function Home () {


  function scrollToTop () {
    window.scrollTo(0, 0);
  }


  return (
    <>


      {/* Metadata */}
      <Helmet>
        <title>Ylli's Code Blog - Home</title>

        <meta description = "Free web development and coding tutorials, blogs and articles. The technologies used include: HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql" />
        <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql, Coding, Programming, Blog, Tutorial, Yll Kelmendi, Ylli's Blog, Design, Web Development, Frontend, Backend, Fullstack, SEO, UI, UX" />
        <meta name="author" content="Yll Kelmendi" />
      </Helmet>
      {/* Metadata End */}


      

      <Suspense fallback = {<h6>Loading...</h6>}>


        {/* Header */}
          <Navbar/>



          <section className="hero">

            <div className= "heroContent">

              <h1 className="heroTitle">Ylli's <em>{"<Code/>"}</em> Blog</h1>
              <Link onClick={() => scrollToTop()} to={"/Blog/"} className = "heroButton"><p>View Blog</p></Link>

            </div>  

            <img fetchpriority="high" src="/Images/word-cloud.png" alt="Programming Languages Word Cloud" className="wordCloud"/>

            <div className="wordGlow"></div>

          </section>
        {/* Header End */}

        


        {/* Recent Blogs */}
          <RecentBlogs/>
        {/* Recent Blogs End */}




        {/* Main page content */}
          <MainPageContent/>
        {/* Main page content end */}

        <Outlet/>

      </Suspense>

    </>
  )
}

export default Home;