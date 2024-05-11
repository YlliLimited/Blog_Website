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
          name: "Introduction",  
          href: "#introduction",   
          subchapters: []
        },

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




          <section id="introduction" className="articleContent">
            <h5>Introduction</h5>
            <p className="articleP">
              Web Development is one of the <em>largest branches</em> of programming, and this is the
              reason why it can be very <em>confusing</em> for developers to get into it. But it doesn't have
              to be that way. <br/>
              In this article, we will go through the <em>whole path to becoming a web developer </em>
              in this market where we have got hundreds of different paths that we can take to 
              achieve similar results. <br/>
            </p>
          </section>



          <section id="web_development_basics" className="articleContent">
            <h5>Web Development Basics</h5>
            <p className="articleP">
              Just like in any field of knowledge, so in web development, you need to have a very solid understanding
              of the basics. <br/>
              In web development, the basics include the following:
              <ul className="articleUl">
                <li><em>HTML</em></li>
                <li><em>CSS</em></li>
                <li><em>JavaScript</em></li>
                <li><em>MySQL</em></li>
                <li><em>PHP</em></li>
              </ul>

              Once you have aquired a good understanding of these languages, you can build a
              multitude of <em>web applications</em> to add to your portfolio.
            </p>
          </section>



          <section id="html" className="articleContent">
            <h5>Step 1: HTML</h5>
            <p className="articleP">

              HTML is a <em>markup language</em> that is used to display content such as text, images,
              videos, audio and other content on web pages. It is the <em>most fundamental</em> language
              that you will need to learn to start building your first websites. Not only is HTML
              used as a standalone language, but it is also combined with other languages such as
              JavaScript and PHP to produce more powerful and more complex websites. <br />

              <h6>Learning Resources:</h6>
              There are a wide variety of resources available where you can learn HTML, but I will list
              some of them below:
              <ul className="articleUl">
                <li><em>Book:</em>&nbsp; HTML & CSS, design & build websites - Jon Duckett</li>
                <li><em>Vide:</em>&nbsp; <a target="_blank" href="https://www.youtube.com/watch?v=HD13eq_Pmp8" className="articleLink">Learn HTML in 1 hour</a></li>
                <li><em>Website:</em>&nbsp; <a target="_blank" href="https://www.w3schools.com/html/default.asp" className="articleLink"> W3Schools HTML tutorial</a></li>
              </ul>

              <div className="articleNote">
                <em>Note:</em>&nbsp; There are many more resources avaliable where you can learn more about HTML, but
                I've listed some that I have personally used before.
              </div>
              
            </p>
          </section>


        </div>







        <Footer />
      </div>

    </>
  )
}