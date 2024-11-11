import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Exercises from "./pages/exercises/Exercises"
import Login from "./pages/login/Login"
import SignUp from "./pages/signup/SignUp"
import Chest from "./components/exercise/chest/Chest"



const App = () => {
  return (
    <>
    <div className=" gradient_bg">

      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/exercises" element={<Exercises/>}/>
        <Route path="/chest" element={<Chest/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}



export default App
