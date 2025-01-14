/** @format */

import { useContext, useEffect } from "react";
import Brands from "../../components/brands/Brands";
import FitTools from "../../components/fitnessTools/FitTools";
import Header from "../../components/header/Header";
import SelfTrain from "../../components/selfTrain/SelfTrain";
import Services from "../../components/services/Services";
import { AuthContext } from "../../container/contexts/Auth";
import About from "../about/About";
import Contact from "../contact/Contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const { user } = useContext(AuthContext);

  return (
    <>
      <Header />
      <Brands />

          <Services />
          <FitTools />
          {/* <SelfTrain /> */}
        {/* <About/>
        <Contact/> */}
        
      
     
    </>
  );
};

export default Home;
