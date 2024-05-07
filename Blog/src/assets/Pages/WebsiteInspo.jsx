import { Helmet } from "react-helmet";

import Navbar from "../Components/Navbar/Navbar";

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

      Website Inspo

    </>

  )

}

export default WebsiteInspo;