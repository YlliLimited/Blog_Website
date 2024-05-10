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

        <Footer />
      </div>

    </>
  )
}