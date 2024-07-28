import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Preloader from './Preloader';

function App() {
  const [screenLoading, setScreenLoading] = useState(false);

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {screenLoading ? (
        <Preloader></Preloader>
      ) : (
        <Footer></Footer>
      )}
    </>
  );
}

export default App;