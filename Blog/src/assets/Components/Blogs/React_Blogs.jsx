import { lazy } from "react";

const Article = lazy(() => import("../Article/Article.jsx"));


export default function React_Blogs () {
  return(
    <>
    
    <Article title = {"How to create an accordion with React JS?"} logoSrc = {"react_logo.svg"} link = {"How_to_create_an_accordion_with_React_JS"}/>
    
    </>
  )
}