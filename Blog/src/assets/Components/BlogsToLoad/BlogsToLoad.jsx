import { lazy } from "react";
import { Link, Outlet } from "react-router-dom";

const Article = lazy(() => import("../Article/Article.jsx"));

export default function BlogsToLoad(props){
  const toLoad = props.toLoad;


  function HTML_Blogs() {
    return(
      <>
        <Article title="HTML"/>
        <Article/>
      </>
    )
  }

  function CSS_Blogs() {
    return(
      <>
        <Article title="CSS"/>
      </>
    )
  }

  function JavaScript_Blogs() {
    return(
      <>

      </>
    )
  }


  if (toLoad === "all"){
    
    return(
      <>
        {HTML_Blogs()}
        {CSS_Blogs()}
        {JavaScript_Blogs()}
      </>
    )

  } else if (toLoad === "html"){
 
    return(
      <>
        {HTML_Blogs()}
      </>
    )

  } else if (toLoad === "css"){
 
    return(
      <>
        {CSS_Blogs()}
      </>
    )

  } else if (toLoad === "javascript"){
 
    return(
      <>
        {JavaScript_Blogs()}
      </>
    )

  }
}