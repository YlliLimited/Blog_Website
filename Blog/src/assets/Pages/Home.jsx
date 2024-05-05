import { Suspense, lazy } from "react";

import Hero from "../Components/Hero/Hero.jsx";
import Navbar from "../Components/Navbar/Navbar.jsx";
const RecentBlogs = lazy(()=> import("../Components/RecentBlogs/RecentBlogs.jsx"));
const MainPageContent = lazy(()=> import("../Components/MainPageContent/MainPageContent.jsx"));

function Home () {
  return (
    <>

      <Suspense fallback = {<h6>Loading...</h6>}>

        {/* Header */}
          <Navbar/>
          <Hero/>
        {/* Header End */}

        


        {/* Recent Blogs */}
          <RecentBlogs/>
        {/* Recent Blogs End */}




        {/* Main page content */}
          <MainPageContent/>
        {/* Main page content end */}

      </Suspense>

    </>
  )
}

export default Home;