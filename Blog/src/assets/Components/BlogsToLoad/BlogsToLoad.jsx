import { Suspense, lazy } from "react";

const HTML_Blogs = lazy(() => import("../Blogs/HTML_Blogs.jsx"));
const CSS_Blogs = lazy(() => import("../Blogs/CSS_Blogs.jsx"));
const JavaScript_Blogs = lazy(() => import("../Blogs/JavaScript_Blogs.jsx"));
const React_Blogs = lazy(() => import("../Blogs/React_Blogs.jsx"));
const Other_Blogs = lazy(() => import("../Blogs/Other_Blogs.jsx"));


export default function BlogsToLoad(props){
  const toLoad = props.toLoad;


  if (toLoad === "all"){
    
    return(
      <>
        <Suspense fallback = {<h6>Loading...</h6>}>
          <HTML_Blogs/>
          <CSS_Blogs/>
          <JavaScript_Blogs/>
          <React_Blogs/>
          <Other_Blogs/>
        </Suspense> 
      </>
    )

  } else if (toLoad === "html"){
 
    return(
      <>
        <Suspense fallback = {<h6>Loading...</h6>}>
          <HTML_Blogs/>
        </Suspense>
      </>
    )

  } else if (toLoad === "css"){
 
    return(
      <>
      <Suspense fallback = {<h6>Loading...</h6>}>
        <CSS_Blogs/>
      </Suspense>
      </>
    )

  } else if (toLoad === "javascript"){
 
    return(
      <>
      <Suspense fallback = {<h6>Loading...</h6>}>
        <JavaScript_Blogs/>
      </Suspense>
      </>
    )

  } else if (toLoad === "react"){
    return(
      <>
      <Suspense fallback = {<h6>Loading...</h6>}>
        <React_Blogs/>
      </Suspense>
      </>
    )
  } else if (toLoad === "other"){
    return(
      <>
      <Suspense fallback = {<h6>Loading...</h6>}>
        <Other_Blogs/>  
      </Suspense>
      </>
    )
  }
}