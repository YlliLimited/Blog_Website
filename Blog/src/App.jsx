import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import Blog from "./assets/Pages/Blog";
import WebsiteInspo from "./assets/Pages/WebsiteInspo";
import Page404 from "./assets/Pages/Page404";



function App() {
  return (
    <>
      <BrowserRouter>
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


          </Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;