import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Article from "../Components/Article/Article";

function Home () {
  return (
    <>

      {/* Header */}
        <Navbar/>
        <Hero/>
      {/* Header End */}


      {/* Recent Blogs */}
        <section className={"recentBlogs"}>


            <h3 className={"recentBlogsTitle"}>Recent Blogs</h3>


            <div className={"cardsParent"}>

              <Article title = {"How to start web development as a beginner?"} logoSrc = {"/Images/html_logo.svg"} link = {"How_to_start_web_development_as_a_beginner"}/>
              <Article title = {"How to create an accordion with React JS?"} logoSrc = {"/Images/react_logo.svg"} link = {"How_to_create_an_accordion_with_React_JS"}/>
              <Article title = {"CSS Basics"} logoSrc = {"/Images/css_logo.svg"} link = {"CSS_Basics"}/>

            </div>

            <div style={{width: "100%", height: "1px", position: "relative"}}></div>


        </section>
      {/* Recent Blogs End */}

    </>
  )
}

export default Home;