import { lazy, Suspense } from "react";

const Article = lazy(() => import("../Article/Article.jsx"));

export default function CSS_Blogs() {
  return(
    <>
    <Suspense fallback = {<h6>Loading...</h6>}>
    
    </Suspense>
    </>
  )
}