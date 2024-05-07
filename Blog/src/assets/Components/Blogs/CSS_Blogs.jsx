import { lazy } from "react";

const Article = lazy(() => import("../Article/Article.jsx"));

export default function CSS_Blogs() {
  return(
    <>
      <Article title = {"CSS Basics"} logoSrc = {"/Images/css_logo.svg"} link = {"CSS_Basics"}/>
    </>
  )
}