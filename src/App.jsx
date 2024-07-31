// import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Works from "./pages/Works";

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
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
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