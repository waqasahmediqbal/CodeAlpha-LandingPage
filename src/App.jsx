import React, { useState, useEffect } from 'react';
import Header from "./components/Header/index.jsx";
import Categories from './components/Categories/index.jsx'
import Speciality from './components/Speciality/index.jsx'
import Footer from './components/Footer/index.jsx'
import Loading from './components/Loading/Loading.jsx'; 

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Categories />
          <Speciality />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
