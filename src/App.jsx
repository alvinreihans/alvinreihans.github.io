import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Works from './pages/Works';
// import Blogs from './pages/Blog';

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1300);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Preloader />
      ) : (
      <>
        <Navbar></Navbar>
        <Footer></Footer>
      </>
      )}
    </>
  );
}

export default App;

{/* <Router>
<Navbar />
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/works" element={<Works />} />
    <Route path="/blogs" element={<Blogs />} />
</Routes>
<Footer />
</Router> */}