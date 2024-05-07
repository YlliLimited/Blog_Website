import { lazy } from "react";

const Article = lazy(() => import("../Article/Article.jsx"));

export default function CSS_Blogs() {
  return(
    <>
      <Article title="CSS"/>
    </>
  )
}