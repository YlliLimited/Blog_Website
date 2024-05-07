import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../Components/Navbar/Navbar.jsx";
const Footer = lazy(() => import("../Components/Footer/Footer.jsx"))



export default function Contact () {
  return (
    <>

    {/* Metadata */}
    <Helmet>
      <title>Ylli's Code Blog - Contact</title>

      <meta description = "Contact Yll Kelmendi through direct contact" />
      <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql, Coding, Programming, Blog, Tutorial, Yll Kelmendi, Ylli's Blog, Design, Web Development, Frontend, Backend, Fullstack, SEO, UI, UX, Contact, Direct Contact" />
      <meta name="author" content="Yll Kelmendi" />
    </Helmet>
    {/* Metadata End */}

    <Suspense fallback={<h4>Loading...</h4>}>
    
      <Navbar/>


      <div className="formParent">

        <h3>Direct Contact</h3>

        <form
          action="https://formspree.io/f/mwkgyabo"
          method="POST"
          className="contactForm"
        >

          <div className="formFlex">
            <div className="formFlexChild">
              <label htmlFor="firstName"><p>First Name:</p></label><br />  
              <input type="text" maxLength={50} name="firstName" className="smallInput" required/>
            </div>

            <div className="formFlexChild">
              <label htmlFor="lastName"><p>Last Name:</p></label><br />  
              <input type="text" maxLength={70} name="lastName" className="smallInput" required/>
            </div>
          </div>

          <label htmlFor="email"><p>E-mail:</p></label><br />
          <input type="email" maxLength={100} name="email" required/><br />

          <label htmlFor="phone"><p>Phone:</p></label><br />
          <input type="tel" maxLength={30} name="phone" placeholder="Optional"/><br />

          <label htmlFor="message"><p>Message:</p></label><br />
          <textarea name="message" maxLength={1000} required></textarea><br />

          <input type="submit" value={"Submit"} className="formSubmit"/>


        </form>

      </div>


      <Footer />
      

    </Suspense>
    
    </>
  )
}