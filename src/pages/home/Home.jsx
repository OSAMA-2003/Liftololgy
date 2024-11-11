import Brands from "../../components/brands/Brands"
import FitTools from "../../components/fitnessTools/FitTools"
import Header from "../../components/header/Header"
import SelfTrain from "../../components/selfTrain/SelfTrain"
import Services from "../../components/services/Services"



const Home = () => {
  return (
    <>
      <Header/>
      <Brands/>
     <Services/>
     <FitTools/>
     <SelfTrain/>
    </>
  )
}

export default Home