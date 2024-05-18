import { lazy } from "react";
import Navbar from "../../Components/Navbar/Navbar";
const Footer = lazy(() => import("../../Components/Footer/Footer.jsx"));
const ArticleChapterBar = lazy(() => import("../../Components/ArticleChapterBar/ArticleChapterBar.jsx"));


export default function HTSWDAAB () {
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
          name: "Front-end or Back-end Development?",  
          href: "#frontend_or_backend",   
          subchapters: []
        },


        {
          name: "Front-end Development", 
          href: "#frontend_development", 
          subchapters: [
            {name: "CSS Framework", href: "#css_framework"},
            {name: "JavaScript Library", href: "#javascript_library"},
            {name: "JavaScript Framework", href: "#javascript_framework"},
            {name: "Other", href: "#other"},
          ]
        },


        {
          name: "Back-end Development", 
          href: "#backend_development", 
          subchapters: [
            {name: "Backend Framework", href: "#backend_framework"},
            {name: "Database", href: "#database"},
            {name: "Other", href: "#other2"},
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
            <h5><em>- </em>Introduction <em>-</em></h5>
            <hr className="articleContentHr"/>
            <p className="articleP">
              Web Development is one of the <em>largest branches</em> of programming, and this is the
              reason why it can be very <em>confusing</em> for developers to get into it. But it doesn't have
              to be that way. <br/>
              In this article, we will go through the <em>whole path to becoming a web developer, </em>
              in this market where we have got hundreds of different paths that we can take to 
              achieve similar results. <br/>
            </p>
          </section>



          <section id="web_development_basics" className="articleContent">
            <h5><em>- </em>Web Development Basics <em>-</em></h5>
            <hr className="articleContentHr"/>
            <p >
              Just like in any field of knowledge, so in web development, you need to have a very solid understanding
              of the basics. <br/>
              In web development, the basics include the following:
            </p>
              <ul className="articleUl">
                <li><p className="articleP"><em>HTML</em></p></li>
                <li><p className="articleP"><em>CSS</em></p></li>
                <li><p className="articleP"><em>JavaScript</em></p></li>
                <li><p className="articleP"><em>MySQL</em></p></li>
                <li><p className="articleP"><em>PHP</em></p></li>
              </ul>

            <p className="articleP">
              Once you have aquired a good understanding of these languages, you can build a
              multitude of <em>web applications</em> to add to your portfolio.
            </p>
              
          </section>



          <section id="html" className="articleContent">
            <h5>Step 1: HTML</h5>
            <hr className="articleContentHr"/>
            <p className="articleP">

              HTML is a <em>markup language</em> that is used to display content such as text, images,
              videos, audio and other content on web pages. It is the <em>most fundamental</em> language
              that you will need to learn to start building your first websites. Not only is HTML
              used as a standalone language, but it is also combined with other languages such as
              JavaScript and PHP to produce more powerful and more complex websites. <br />

            </p>

              <h6>Learning Resources:</h6>
              <p className="articleP">
                There are a wide variety of resources available where to learn HTML, but I will list
                some of them below:
              </p>
              
              <ul className="articleUl">
                <li><p className="articleP"><em>Book:</em>&nbsp; HTML & CSS, design & build websites - Jon Duckett <em>(recommended)</em></p></li>
                <li><p className="articleP"><em>Video:</em>&nbsp; <a target="_blank" href="https://www.youtube.com/watch?v=HD13eq_Pmp8" className="articleLink">Learn HTML in 1 hour</a></p></li>
                <li><p className="articleP"><em>Website:</em>&nbsp; <a target="_blank" href="https://www.w3schools.com/html/default.asp" className="articleLink"> W3Schools HTML tutorial</a></p></li>
              </ul>

              <div className="articleNote">
                <p className="articleP"><em>Note:</em>&nbsp; There are many more resources avaliable to learn more about HTML, but
                I've listed some that I have personally used before.
                </p>
              </div>

              <h6>Project Ideas:</h6>
              <ul className="articleUl">
                <li><p className="articleP">Article page</p></li>
                <li><p className="articleP">YouTube copy</p></li>
                <li><p className="articleP">Wikipedia copy</p></li>
                <li><p className="articleP">Dentist website</p></li>
                <li><p className="articleP">Resume/CV website</p></li>
              </ul>

              <div className="articleNote">
                <p className="articleP"><em>Note:&nbsp;</em> Try to use as many different HTML tags as possible
                while creating these projects so that you can practice all the tags that you know.
                </p>
              </div>
              
          </section>




          <section id="css" className="articleContent">
            <h5>Step 2: CSS</h5>
            <hr className="articleContentHr"/>
            <p className="articleP">

              After experimenting around with HTML, you have probably noticed how bad everything looks on the page.
              This is because with HTML you only display the content of the page, without styling it,
              and this is where CSS comes in. With CSS you can <em>style everything</em> in the web page, from 
              <em>fonts, colors, sizes, positioning and much much more.</em> <br />
              Learning CSS is a <em>must</em> for web developers because it is a tool that will follow you through
              your whole Web Development journey, and it is also the tool that developers use
              to create <em>stunning designs</em> on their websites.
            </p>


              <h6>Learning Resources:</h6>
              <ul className="articleUl">
                <li><p className="articleP"><em>Book:</em>&nbsp; HTML & CSS, design & build websites - Jon Duckett <em>(recommended)</em></p></li>
                <li><p className="articleP"><em>Video:</em>&nbsp; <a target="_blank" href="https://www.youtube.com/watch?v=wRNinF7YQqQ&t=1196s" className="articleLink">Learn CSS in 1 hour</a></p></li>
                <li><p className="articleP"><em>Website:</em>&nbsp; <a target="_blank" href="https://www.w3schools.com/css/default.asp" className="articleLink"> W3Schools CSS tutorial</a></p></li>
              </ul>


              <h6>Project Ideas:</h6>
              <ul className="articleUl">
                <li><p className="articleP">Styling your HTML only projecs</p></li>
                <li><p className="articleP">Photo Album</p></li>
                <li><p className="articleP">Different UI components</p></li>
                <li><p className="articleP">Blog Website</p></li>
                <li><p className="articleP">E-Commerce Website</p></li>
              </ul>
          </section>




          <section id="javascript" className="articleContent">
            <h5>Step 3: JavaScript</h5>
            <hr className="articleContentHr"/>
            <p className="articleP">

              And we're finally here! JavaScript is one of the <em>most popular programming languages</em> in the world,
              and not without reason. It is used to build many different things, such as <em>websites, mobile applications, videogames and much much more.</em> As Atwood's law beautifully puts it,
            </p>
            
              <div className="articleQuote">
                <p className="articleP">"Any application that can be written in JavaScript, will eventually be written in JavaScript."</p>
                <div className="articleQuoteAuthor"><p className="articleP"> - Jeff Atwood</p></div>
              </div>

              <p className="articleP">

              By learning JavaScript, you can start to build much more complicated websites, and it is 
              the <em>primary language</em> that is used both in the <em>frontend and in the backend</em> of modern websites.

              </p>
            



              <h6>Learning Resources:</h6>
              <ul className="articleUl">
                <li><p className="articleP"><em>Book:</em>&nbsp; JavaScript & JQuery, interactive front-end web development - Jon Duckett <em>(recommended)</em></p></li>
                <li><p className="articleP"><em>Video:</em>&nbsp; <a target="_blank" href="https://www.youtube.com/watch?v=EerdGm-ehJQ" className="articleLink">JavaScript Tutorial Full Course - Beginner to Pro</a></p></li>
                <li><p className="articleP"><em>Website:</em>&nbsp; <a target="_blank" href="https://www.w3schools.com/js/default.asp" className="articleLink"> W3Schools JavaScript tutorial</a></p></li>
              </ul>


              <h6>Project Ideas:</h6>
              <ul className="articleUl">
                <li><p className="articleP">Calculator App</p></li>
                <li><p className="articleP">Modal, Offcanvas and Carousel elements</p></li>
                <li><p className="articleP">To-Do App</p></li>
                <li><p className="articleP">Unit Converter</p></li>
                <li><p className="articleP">Weather App</p></li>
              </ul>

          </section>







          <section id="mysql" className="articleContent">
            <h5>Step 4: MySQL</h5>
            <hr className="articleContentHr"/>
            <p className="articleP">

              You have probably already noticed that all the websites that you have created so 
              far haven't really got any complex functionality. This is because they were <em>Static Websites</em>,
              which are websites that don't dynamically change their content. To create <em>Dynamic Websites</em>, you
              need to add a databse to your website, and a very popular language to do this is <em>MySql.</em> <br/>
              MySQL is one of the most widely used languages when it comes to <em>relational database</em> programming.
              It is also not very hard to learn and use, so it's a very good choice for beginners to 
              get their feet in <em>full-stack</em> development. 
            
            </p>

              <h6>Learning Resources:</h6>
              <ul className="articleUl">
                <li><p className="articleP"><em>Book:</em>&nbsp; PHP & MySQL, server-side web development - Jon Duckett <em>(recommended)</em></p></li>
                <li><p className="articleP"><em>Video:</em>&nbsp; <a target="_blank" href="https://www.youtube.com/watch?v=5OdVJbNCSso" className="articleLink">MySQL full course for free</a></p></li>
                <li><p className="articleP"><em>Website:</em>&nbsp; <a target="_blank" href="https://www.w3schools.com/mysql/" className="articleLink"> W3Schools MySQL tutorial</a></p></li>
              </ul>


              <h6>Project Ideas:</h6>
              <ul className="articleUl">
                <li><p className="articleP">Library Database Design</p></li>
                <li><p className="articleP">Carwash Database Design</p></li>
                <li><p className="articleP">Lawyer Database Design</p></li>
                <li><p className="articleP">Clothes Shop Database Design</p></li>
                <li><p className="articleP">Social Media Database Design</p></li>
              </ul>
          </section>








          <section id="php" className="articleContent">
            <h5>Step 5: PHP</h5>
            <hr className="articleContentHr"/>
            <p className="articleP">

              Now we've come to one of the most <em>important steps</em> of your web development journey, and that is <em>PHP</em>. 
               After learning PHP, you can create almost any website that you want, including social media, e-commerce websites
              and much much more. A lot of <em>popular sites</em> are built using PHP like <em>Facebook, Wikipedia, Etsy, Wordpress,</em> and 
              this all goes to show you just how powerful this language is. <br />
              PHP allows us to easily <em>connect</em> the back-end to the front-end of our sites, and display content <em>dynamically</em> from
              the database. It's got a very simple syntax and this makes it an ideal choice for beginner programmers. <br />
              Although in the recent years it's lost it's popularity, PHP is still <em>a must</em> for any web developers and it is
              far from being a <em>"dead language"</em>.

              </p>


              <div className="articleNote">
                <p className="articleP"><em>Note:&nbsp;</em> It's very important to note that PHP is not the best choice for creating
                full-stack web applications because it's not the safest language in the world. However, I 
                highly suggest you to learn it, so you can aquire a deeper knowledge of how full-stack programming works, which
                will be very important when you are learning full-stack frameworks, that we will be talking about very
                soon.
                </p>
              </div>
              

              <h6>Learning Resources:</h6>
              <ul className="articleUl">
                <li><p className="articleP"><em>Book:</em>&nbsp; PHP & MySQL, server-side web development - Jon Duckett <em>(recommended)</em></p></li>
                <li><p className="articleP"><em>Video:</em>&nbsp; <a target="_blank" href="https://www.youtube.com/watch?v=zZ6vybT1HQs" className="articleLink">PHP Full Course for non-haters</a></p></li>
                <li><p className="articleP"><em>Website:</em>&nbsp; <a target="_blank" href="https://www.w3schools.com/php/" className="articleLink"> W3Schools PHP tutorial</a></p></li>
              </ul>


              <h6>Project Ideas:</h6>
              <ul className="articleUl">
                <li><p className="articleP">Create web applications for the databases that you have already created using MySQL</p></li>
              </ul>
            
          </section>


          <section id="frontend_or_backend" className="articleContent">
            <h5><em>- </em>Front-end or Back-end Development? <em>-</em></h5>
            <hr className="articleContentHr"/>
            <p className="articleP">
              After going through the steps listed above, you have most likely aquired 
              a great deal of information about web development. Now there is a <em>question </em>
              that arises, <br />
            </p>

              <div className="articleQuote">
                <p className="articleP">Should you continue web development as a front-end or back-end developer?</p>
              </div>

              <p className="articleP">This is quite a big question that has a very simple answer.</p>

              <div className="articleQuote">
                <p className="articleP">Both.</p>
              </div>

              <p className="articleP">
                In the modern web development world, it is very important to be a fluent front-end
                and back-end developer. You will have many <em>more opportunities</em> as a full-stack developer,
                compared to being only fluent on one of the "ends". This allows you to be more <em>flexible</em> as a 
                programmer, and one step closer to landing your first job. <br />
                It is important to mention that over time you will most likely specialize 
                in front or back-end development, but in the beginning, being full-stack is the 
                right choice.
              </p>
          </section>








          <section id="frontend_development" className="articleContent">
            <h5><em>- </em>Front-end Development <em>-</em></h5>
            <hr className="articleContentHr"/>
            <p className="articleP">
              Now we will go more in depth on front-end web development. We will learn about the
              best <em>CSS Framework</em> to learn, then we will go through all of the main <em>JavaScript libraries</em>,
              we will continue on to the best <em>JavaScript Framework</em>, and last we will learn about
              some <em>extras</em> that we need to know.
            </p>
          </section>





          <section id="css_framework" className="articleContent">
            <h5>CSS Framework</h5>
            <hr className="articleContentHr"/>
            <p className="articleP">
              A great choice to get more into front-end development is to learn one of the
              major CSS Frameworks. They allow you to develop your websites much <em>faster</em>, as 
              they offer pre-made CSS classes to <em>heavily speed up</em> development. <br />
              There are two main CSS Fameworks that you need to know: 
              </p>

              <ul className="articleUl">
                <li><p className="articleP"><em>Bootstrap</em></p></li>
                <li><p className="articleP"><em>Tailwind CSS</em></p></li>
              </ul>

              <p className="articleP">
                To get started, I recommend learning Bootstrap because it's easier, but I 
                also think it's a must to also learn Tailwind, as it offers much more features but it 
                is a bit more complicated, so it's better to learn it after Bootstrap.
              </p>


              <h6>Learning Resources:</h6>
              <ul className="articleUl">
                <li><p className="articleP"><em>Video:</em>&nbsp; <a target="_blank" href="https://www.youtube.com/watch?v=-qfEOE4vtxE" className="articleLink">Bootstrap CSS Framework - Full Course for Beginners</a></p></li>
                <li><p className="articleP"><em>Website:</em>&nbsp; <a target="_blank" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" className="articleLink"> Bootstrap docs</a></p></li>
              </ul>
          </section>





          <section id="javascript_library" className="articleContent">
            <h5>JavaScript Library</h5>
            <hr className="articleContentHr"/>
            <p className="articleP">
              A <em>must</em> in modern web development are JavaScript Libraries. They are very powerful tools used
              in front-end development, that allow <em>component</em> oriented programming. <br />
              There is a wide range of JavaScript Libraries, but the most important ones are:
            </p>

              <ul className="articleUl">
                <li><p className="articleP"><em>React</em></p></li>
                <li><p className="articleP"><em>Angular</em></p></li>
                <li><p className="articleP"><em>Svelte</em></p></li>
                <li><p className="articleP"><em>Vue</em></p></li>
              </ul>

              <p className="articleP">
                You can probably see that there is a lot on the menu when it comes to JavaScript Libraries, but to not waste any
                time, I suggest that you learn <em>React</em> first because it is <em>the most popular</em> library, but Angular is also a great
                choice, as it's also very popular. When it comes to Svelte and Vue, they offer <em>liable</em> choices, but they are not as 
                widely used as the before mentioned libraries.
              </p>


              <h6>Learning Resources:</h6>
              <ul className="articleUl">
                <li><p className="articleP"><em>Video:</em>&nbsp; <a target="_blank" href="https://www.youtube.com/watch?v=CgkZ7MvWUAA" className="articleLink">React Full Course for free</a></p></li>
                <li><p className="articleP"><em>Website:</em>&nbsp; <a target="_blank" href="https://react.dev/learn" className="articleLink"> React docs</a></p></li>
              </ul>
          </section>




        </div>

        <Footer />
      </div>

    </>
  )
}