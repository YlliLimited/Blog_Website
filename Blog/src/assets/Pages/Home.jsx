import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import RecentBlogs from "../Components/RecentBlogs/RecentBlogs";

function Home () {
  return (
    <>

      {/* Header */}
        <Navbar/>
        <Hero/>
      {/* Header End */}


      <RecentBlogs/>

    </>
  )
}

export default Home;