import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'blogs',
        element: <Blogs />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'works',
        element: <Works />,
      },
      {
        path: '*',
        element: <NoPage />,
      }
    ]
  }
])
export default function App() {
  return <RouterProvider router={router} />;
}

function Layout () {
  const [screenLoading, setScreenLoading] = useState(false);
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