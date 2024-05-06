import { Suspense, lazy } from "react";
import { Link, Outlet } from "react-router-dom";

import Navbar from "../Components/Navbar/Navbar.jsx";
const RecentBlogs = lazy(()=> import("../Components/RecentBlogs/RecentBlogs.jsx"));
const MainPageContent = lazy(()=> import("../Components/MainPageContent/MainPageContent.jsx"));

function Home () {
  return (
    <>
      <Suspense fallback = {<h6>Loading...</h6>}>

        {/* Header */}
          <Navbar/>



          <section className="hero">

            <div className= "heroContent">

              <h1 className="heroTitle">Ylli's <em>{"<Code/>"}</em> Blog</h1>
              <Link to={"/Blog/"} className = "heroButton"><p>View Blog</p></Link>

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