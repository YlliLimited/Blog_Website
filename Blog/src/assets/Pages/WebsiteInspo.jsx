import { Helmet } from "react-helmet";
import { lazy } from "react";

import Navbar from "../Components/Navbar/Navbar";
const Footer = lazy(() => import("../Components/Footer/Footer.jsx"));
const ThreeLines = lazy(() => import("../Components/ThreeLines/ThreeLines.jsx"));


function WebsiteInspo () {

  return (

    <>

      {/* Metadata */}
      <Helmet>
        <title>Ylli's Code Blog - Website Inspo</title>

        <meta description = "Free web development and coding tutorials, blogs and articles. The technologies used include: HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql" />
        <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql, Coding, Programming, Blog, Tutorial, Yll Kelmendi, Ylli's Blog, Design, Web Development, Frontend, Backend, Fullstack, SEO, UI, UX, Inspiration, Inspo, Minimalistic" />
        <meta name="author" content="Yll Kelmendi" />
      </Helmet>
      {/* Metadata End */}
    
      <Navbar/>

      

        <h3 className="inspoHeader"><em>- </em>Website Ispo<em> -</em></h3>

        <p className="inspoDescription">
          In this page you will find a curated list of websites that I <em>love</em>, so you can get inspired by their <em>incredible design</em>. You will find a <em>wide array of websites</em> ranging from tech websites to E-commerce websites and beyond.
        </p>

        {/* Apple */}
        <section id="inspoSection">
          <div className="inspoTitle" style={{backgroundColor: "black", color: "white"}}>
            <h4>Apple</h4>
            <img src="/Images/apple_logo.svg" alt="Apple Logo svg" loading="lazy"/>
          </div>

          <div className="inspoBody" style={{backgroundColor: "white", color: "black"}}>  
            <a href="https://www.apple.com" target="_blank">
              <h3 className="inspoViewWebsite">Go To Website</h3>
              <img src="/Images/appleScreenshot.png" alt="Apple Iphone 15 Pro website header" loading="lazy" className="inspoScreenshot"/>
            </a>
          </div>
        </section>
        {/* Apple End */}



        <ThreeLines/>



        {/* Tesla Cybertruck */}
        <section id="inspoSection">
          <div className="inspoTitle" style={{backgroundColor: "white", color: "black"}}>
            <h4>Tesla Cybertruck</h4>
            <img src="/Images/cybertruck_logo.svg" alt="Tesla Cybertruck Logo svg" loading="lazy"/>
          </div>

          <div className="inspoBody" style={{backgroundColor: "black", color: "white"}}>  
            <a href="https://www.tesla.com/cybertruck" target="_blank">
              <h3 className="inspoViewWebsite">Go To Website</h3>
              <img src="/Images/cybertruckScreenshot.png" alt="Tesla Cybertruck Website Header" className="inspoScreenshot" loading="lazy"/>
            </a>
          </div>
        </section>
        {/* Tesla Cybertruck End */}



        <ThreeLines/>


        
        {/* OrangeYouGlad */}
        <section id="inspoSection">
          <div className="inspoTitle" style={{backgroundColor: "#FD6115", color: "white"}}>
            <h4>OrangeYouGlad</h4>
            <img src="/Images/orangeYouGlad_logo.jpg" alt="OrangeYouGlad Logo svg" loading="lazy"/>
          </div>

          <div className="inspoBody" style={{backgroundColor: "white", color: "white"}}>  
            <a href="https://www.orangeyouglad.com/" target="_blank">
              <h3 className="inspoViewWebsite">Go To Website</h3>
              <img src="/Images/orangeYouGladScreenshot.png" alt="OrangeYouGlad Website Header" className="inspoScreenshot" loading="lazy"/>
            </a>
          </div>
        </section>
        {/* OrangeYouGlad End */}




        <ThreeLines/>



        {/* Notion */}
        <section id="inspoSection">
          <div className="inspoTitle" style={{backgroundColor: "white", color: "black"}}>
            <h4>Notion</h4>
            <img src="/Images/notion_logo.svg" alt="Notion Logo svg" loading="lazy"/>
          </div>

          <div className="inspoBody" style={{backgroundColor: "black", color: "white"}}>  
            <a href="https://www.notion.so" target="_blank">
              <h3 className="inspoViewWebsite">Go To Website</h3>
              <img src="/Images/notionScreenshot.png" alt="Notion Website Header" className="inspoScreenshot" loading="lazy"/>
            </a>
          </div>
        </section>
        {/* Notion End */}



      <Footer/>

    </>

  )

}

export default WebsiteInspo;