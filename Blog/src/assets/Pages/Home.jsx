import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import RecentBlogs from "../Components/RecentBlogs/RecentBlogs";

function Home () {
  return (
    <>

      {/* Header */}

      <header>
        <Navbar/>
        <Hero/>
        <RecentBlogs/>
      </header>
        
      {/* Header End */}

    </>
  )
}

export default Home;