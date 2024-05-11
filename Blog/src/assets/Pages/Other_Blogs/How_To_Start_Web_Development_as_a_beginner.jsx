import { lazy } from "react";
import Navbar from "../../Components/Navbar/Navbar";
const Footer = lazy(() => import("../../Components/Footer/Footer.jsx"));
const ArticleChapterBar = lazy(() => import("../../Components/ArticleChapterBar/ArticleChapterBar.jsx"));


export default () => {
  return(
    <>
      <Navbar hide="false"/>

      <ArticleChapterBar chapters = {[

        {
          name: "Web Development Basics", 
          href: "#web_development_basics", 
          subchapters: [
            {name: "HTML", href: "#html"},
            {name: "CSS", href: "#css"},
            {name: "JavaScript", href: "#javascript"},
            {name: "MySQL", href: "#mysql"},
            {name: "PHP", href: "#php"},
          ]
        },


        {
          name: "Frontend or Backend Development?",  
          href: "#frontend_or_backend",   
          subchapters: []
        },


        {
          name: "Frontend Development", 
          href: "#frontend_development", 
          subchapters: [
            {name: "CSS Framework", href: "#css_framework"},
            {name: "JavaScript Library", href: "#javascript_library"},
            {name: "JavaScript Framework", href: "#javascript_framework"},
            {name: "Other", href: "#other"},
          ]
        },


        {
          name: "Backend Development", 
          href: "#backend_development", 
          subchapters: [
            {name: "Backend Framework", href: "#backend_framework"},
            {name: "Database", href: "#database"},
            {name: "JavaScript Framework", href: "#javascript_framework"},
            {name: "Other", href: "#other"},
          ]
        },

      ]}/>

      <div id="articleBody">

        <img src="/Images/webDev_logo.svg" alt="Simple coding icon with HTML tags" className="articleIcon"/>

        <h4 className="articleHeader">
          How to start Web Development as a beginner?
        </h4>

        <hr className="articleHeaderHrTop"/>
          <div className="articleInfoParent">
            <h6>11.05.2024</h6>
            <h6>Yll Kelmendi</h6>
          </div>
        <hr className="articleHeaderHrBottom"/>







        <div className="articleContentParent">




          <div className="articleContent">
            <h5>Introduction</h5>
            <p className="articleP">
              Web Development is one of the largest branches of programming, and this is the
              reason why it can be very confusing for developers to get into it.
            </p>
          </div>




        </div>







        <Footer />
      </div>

    </>
  )
}