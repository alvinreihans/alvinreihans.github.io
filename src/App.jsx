// import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";
import Works from "./pages/Works";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="works" element={<Works />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout () {
  const [screenLoading, setScreenLoading] = useState(true);
  const NavClickHandler = () => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 700);
  };

  return (
    <>
    {screenLoading ? (
      <Preloader />) : (
      <>
        <Navbar handleNavClick={NavClickHandler}/>
        <Outlet />
        <Footer />
      </>
      )}
    </>
  )
  
  // return (
  //   <>
  //     <Navbar />
  //     <Outlet />
  //     <Footer />
  //   </>
  // )
}

//OLD APP
// import { useState, useEffect } from 'react';
// function App() {
//   const [screenLoading, setScreenLoading] = useState(false);

//   useEffect(() => {
//     setScreenLoading(true);
//     setTimeout(() => {
//       setScreenLoading(false);
//     }, 1300);
//   }, []);

//   return (
//     <>
//       {screenLoading ? (
//         <Preloader />
//       ) : (
//       <>
//         <Navbar></Navbar>
//         <Footer></Footer>
//       </>
//       )}
//     </>
//   );
// }