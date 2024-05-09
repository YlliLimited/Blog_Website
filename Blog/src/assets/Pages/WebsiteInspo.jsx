import { Helmet } from "react-helmet";
import { lazy } from "react";

import Navbar from "../Components/Navbar/Navbar";
const Footer = lazy(() => import("../Components/Footer/Footer.jsx"));


function WebsiteInspo () {

  return (

    <>

      {/* Metadata */}
      <Helmet>
        <title>Ylli's Code Blog - Website Inspo</title>

        <meta description = "Free web development and coding tutorials, blogs and articles. The technologies used include: HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql" />
        <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql, Coding, Programming, Blog, Tutorial, Yll Kelmendi, Ylli's Blog, Design, Web Development, Frontend, Backend, Fullstack, SEO, UI, UX, Inspiration, Inspo" />
        <meta name="author" content="Yll Kelmendi" />
      </Helmet>
      {/* Metadata End */}
    
      <Navbar/>

      

        <h3 className="inspoHeader"><em>- </em>Website Ispo<em> -</em></h3>

        {/* Apple */}
        <section id="inspoSection">
          <div className="inspoTitle" style={{backgroundColor: "black", color: "white"}}>
            <h4>Apple</h4>
            <img src="/Images/apple_logo.svg" alt="Apple Logo svg" loading="lazy"/>
          </div>

          <div className="inspoBody" style={{backgroundColor: "white", color: "black"}}>  
            <a href="https://apple.com" target="_blank">
              <img src="/Images/appleScreenshot.png" alt="Apple Iphone 15 Pro website header" className="inspoScreenshot"/>
            </a>
          </div>
        </section>
        {/* Apple End */}



        <div className="threeLinesParent">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>



        {/* Tesla Cybertruck */}
        <section id="inspoSection">
          <div className="inspoTitle" style={{backgroundColor: "white", color: "black"}}>
            <h4>Tesla Cybertruck</h4>
            <img src="/Images/cybertruck_logo.svg" alt="Tesla Cybertruck Logo svg" loading="lazy"/>
          </div>

          <div className="inspoBody" style={{backgroundColor: "black", color: "white"}}>  
            <a href="https://www.tesla.com/cybertruck" target="_blank">
              <img src="/Images/cybertruckScreenshot.png" alt="Tesla Cybertruck Website Header" className="inspoScreenshot"/>
            </a>
          </div>
        </section>
        {/* Tesla Cybertruck End */}



      <Footer/>

    </>

  )

}

export default WebsiteInspo;