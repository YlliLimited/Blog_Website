import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import LoadingScreen from "./assets/Components/LoadingScreen/LoadingScreen";

const Home = lazy(() => import("./assets/Pages/Home.jsx"));
const Blog = lazy(() => import("./assets/Pages/Blog.jsx"));
const WebsiteInspo = lazy(() => import("./assets/Pages/WebsiteInspo.jsx"));
const Page404 = lazy(() => import("./assets/Pages/Page404.jsx"));
const Contact = lazy(() => import("./assets/Pages/Contact.jsx"));



function App() {
  return (
    <>
      <BrowserRouter>

        <Suspense fallback = {<LoadingScreen/>}>

          <Routes>

            <Route path="/">


              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />


              
              {/* Blog Pages Routs */}
              <Route path="Blog/" element={<Blog />}>
              </Route>




              {/* Ispo pages routes */}
              <Route path="Website_Inspo/" element={<WebsiteInspo />}>
              </Route>




              {/* 404 Page */}
              <Route path="*" element={<Page404 />} />




              {/* Contact Page*/}
              <Route path="Contact/" element={<Contact />}></Route>


            </Route>


          </Routes>

        </Suspense>
        
      </BrowserRouter>
    </>
  )
}

export default App;