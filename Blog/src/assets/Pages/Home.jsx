import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Article from "../Components/Article/Article";
import Footer from "../Components/Footer/Footer";

function Home () {
  return (
    <>

      {/* Loading Screen */}
        <LoadingScreen/>
      {/* Loading Screen End */}



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

        </section>
      {/* Recent Blogs End */}




      {/* Main page content */}
      <div className="mainPageContent">



        {/* About Blog */}

          <section id="aboutBlog">
            <h3>About the blog</h3>
            <p>
              I started developing this blog in April 2024 as a way to use my newly aquired React JS skills, and as an opportunity to 
              <em> "learn by teaching"</em>. Since then, I have been constantly working on it, and expanding it with new features and more articles.
              <br></br>
              <br></br>
              In this blog you will find articles covering a wide variety of coding topics across
              multiple programming languages, libraries, frameworks and other technologies. The topics will mostly include 
              <em> web development</em>, <em> design</em>, <em> UI and UX</em>, <em> front-end</em> and <em> back-end</em> development and <em> many more</em>. I will try to bring a
              simple approach to these topics, and only touch on the most important aspects of them, while including as much
              examples and other illustrations as possible. 
              <br></br>
              <br></br>
              I hope that you will find value in this blog, and <em> have a nice read</em> !
            </p>

            <img src="/Images/Languages_Map.png" alt="HTML, CSS, JS, React JS mind map design" loading="lazy" />
          </section>

        {/* About Blog End */}


        {/* Footer */}
        <Footer/>
        {/* Footer End */}



      </div>
      {/* Main page content end */}

    </>
  )
}

export default Home;