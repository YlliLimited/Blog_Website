import { lazy } from "react";

const HTML_Blogs = lazy(() => import("../Blogs/HTML_Blogs.jsx"));
const CSS_Blogs = lazy(() => import("../Blogs/CSS_Blogs.jsx"));
const JavaScript_Blogs = lazy(() => import("../Blogs/JavaScript_Blogs.jsx"));
const React_Blogs = lazy(() => import("../Blogs/React_Blogs.jsx"));


export default function BlogsToLoad(props){
  const toLoad = props.toLoad;


  if (toLoad === "all"){
    
    return(
      <>
        <HTML_Blogs/>
        <CSS_Blogs/>
        <JavaScript_Blogs/>
        <React_Blogs/>
      </>
    )

  } else if (toLoad === "html"){
 
    return(
      <>
        <HTML_Blogs/>
      </>
    )

  } else if (toLoad === "css"){
 
    return(
      <>
        <CSS_Blogs/>
      </>
    )

  } else if (toLoad === "javascript"){
 
    return(
      <>
        <JavaScript_Blogs/>
      </>
    )

  } else if (toLoad === "react"){
    return(
      <>
        <React_Blogs/>
      </>
    )
  }
}