import { Link, NavLink, useNavigate } from "react-router-dom"
import  { useState } from "react";
import logo from "../../assets/fitness_logo.png"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import './navbar.css'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar top-0 bg-red-950 fixed w-full z-50 py-[0.5rem] px-[6rem] flex justify-between items-center border-b-2  border-red-950  ">
      {/* Navbar Links */}

    

     <div className="logo">
          <img src={logo} width={80} alt="logo" />
        </div>

      <div className="navbar_links t">
        {/* Navbar Links Container with <p> tags */}
        <ul className="navbar_links_container hidden  lg:flex  row-auto ">
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" activeClassName="active">
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact 
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Sign In / Sign Up */}
      <div className="navbar_sign  items-center hidden lg:flex">
        <Link to="/login">
          <p>Sign in</p>
        </Link>
        
        <button
          type="button"
          onClick={() => {
            navigate("/signUp");
          }}
          className="btn   text-white"
        >
          Sign up
        </button>
      </div>
    

      {/* Mobile Menu */}
      <div className="menu flex lg:hidden ml-2 ">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="menu_container flex columns-1 justify-end items-end text-end">
            <div className="menu_container_links scale-up-center">
              <p>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </p>
              <p>
              <NavLink to="/team" activeClassName="active">
              Exercises
            </NavLink>
              </p>
              <p>
              <NavLink to="/about" activeClassName="active">
              About Us
            </NavLink>
              </p>
              <p>
              <NavLink to="/contact" activeClassName="active">
              Contact 
            </NavLink>
              </p>

              <div className="menu_sign">
                <Link to="/login">
                  <p>Sign in</p>
                </Link>
                <button
          type="button"
          onClick={() => {
            navigate("/signUp");
          }}
          className="btn btn-lg btn-primary btn-login text-white"
        >
          Sign up
        </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};



export default Navbar