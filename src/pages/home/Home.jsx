/** @format */

import { useContext, useEffect } from "react";
import Brands from "../../components/brands/Brands";
import FitTools from "../../components/fitnessTools/FitTools";
import Header from "../../components/header/Header";
import Services from "../../components/services/Services";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <Header />
      <Brands />

          <Services />
          <FitTools />
        
      
     
    </>
  );
};

export default Home;
