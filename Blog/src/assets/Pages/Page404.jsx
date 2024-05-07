import { Helmet } from "react-helmet";

import Navbar from "../Components/Navbar/Navbar.jsx";

function Page404 () {
  return (
    <>

      {/* Metadata */}
      <Helmet>
        <title>Ylli's Code Blog - 404</title>

        <meta description = "Free web development and coding tutorials, blogs and articles. The technologies used include: HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql" />
        <meta name="keywords" content="HTML, CSS, JavaScript, TypeScript, React JS, PHP, MySql, Coding, Programming, Blog, Tutorial, Yll Kelmendi, Ylli's Blog, Design, Web Development, Frontend, Backend, Fullstack, SEO, UI, UX" />
        <meta name="author" content="Yll Kelmendi" />
      </Helmet>
      {/* Metadata End */}

    
      <Navbar/>    
      <h1 style={{textAlign: "center", color: "white", marginTop: "150px"}}>404 Page Not Found</h1>

    </>
  )
}


export default Page404;