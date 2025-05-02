import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Exercises from "./pages/exercises/Exercises";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
// import Profile from "./pages/profile/profile";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { AuthProvider } from "./container/contexts/Auth";
import { useState } from "react";
import ExerciseDetails from "./pages/exercises/ExerciseDetails";
import Profile from "./pages/profile/Profile";

const App = () => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  // Use useLocation to determine the current path
  const location = useLocation();
  const hideNavbarAndFooter = ["/login", "/signUp"].includes(location.pathname);

  return (
    <div className="gradient_bg">
      {/* Auth context to manage user state */}
      <AuthProvider value={{ user, login, logout }}>
        {/* ToastContainer for notifications */}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {/* Conditionally render Navbar */}
        {!hideNavbarAndFooter && <Navbar />}

        {/* Routes for navigating between pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercise/:bodyPart" element={<ExerciseDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>

        {/* Conditionally render Footer */}
        {!hideNavbarAndFooter && <Footer />}
      </AuthProvider>
    </div>
  );
};

export default App;
