import { Suspense, lazy } from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
const Footer = lazy(() => import("../Components/Footer/Footer.jsx"))



export default function Contact () {
  return (
    <>

    <Suspense fallback={<h4>Loading...</h4>}>
    
      <Navbar/>


      <div className="formParent">

        <h4>Direct Contact</h4>

        <form
          action="https://formspree.io/f/mwkgyabo"
          method="POST"
          className="contactForm"
        >

          <div className="formFlex">
            <div className="formFlexChild">
              <label htmlFor="firstName">First Name:</label><br />  
              <input type="text" maxLength={50} name="firstName" required/>
            </div>

            <div className="formFlexChild">
              <label htmlFor="lastName">Last Name:</label><br />  
              <input type="text" maxLength={70} name="lastName" required/>
            </div>
          </div>

          <label htmlFor="email">E-mail:</label><br />
          <input type="email" maxLength={100} name="email" required/><br />

          <label htmlFor="phone">Phone:</label><br />
          <input type="tel" maxLength={30} name="phone" placeholder="Optional"/><br />

          <label htmlFor="message">Message:</label><br />
          <textarea name="message" maxLength={1000} required></textarea><br />

          <input type="submit" value={"Submit"} className="formSubmit"/>


        </form>

      </div>


      <Footer />
      

    </Suspense>
    
    </>
  )
}