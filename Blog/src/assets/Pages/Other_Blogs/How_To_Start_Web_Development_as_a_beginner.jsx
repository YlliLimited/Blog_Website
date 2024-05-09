import { lazy } from "react";
import Navbar from "../../Components/Navbar/Navbar";
const Footer = lazy(() => import("../../Components/Footer/Footer.jsx"));
const ArticleChapterBar = lazy(() => import("../../Components/ArticleChapterBar/ArticleChapterBar.jsx"));


export default () => {
  return(
    <>
      <Navbar hide="false"/>

      <ArticleChapterBar/>

      <div className="articleBody">

        <Footer />
      </div>

    </>
  )
}