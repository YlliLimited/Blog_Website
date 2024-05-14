import { Suspense, lazy } from "react";

const Article = lazy(() => import("../Article/Article.jsx"));


export default function Other_Blogs () {
  return(
  <>
  
  <Suspense fallback = {<h6>Loading...</h6>}>
    <Article title = {"How to start web development as a beginner?"} logoSrc = {"webDev_logo.svg"} link = {"How_to_start_web_development_as_a_beginner"}/>
  </Suspense>

  </>
  )
}