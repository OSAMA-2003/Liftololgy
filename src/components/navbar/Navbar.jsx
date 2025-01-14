/** @format */

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "../../assets/fitness_logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../container/contexts/Auth";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const { user , logout } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar top-0 bg-red-950 fixed w-full z-50 py-[0.5rem] px-[6rem] flex justify-between items-center border-b-2  border-red-950  ">
        {/* Navbar Links */}

        <div className="navbar_links flex items-center">
          <div className="logo">
            <img src={logo} width={80} alt="logo" />
          </div>
          {/* Navbar Links Container with <p> tags */}
          <ul className="navbar_links_container hidden  lg:flex  row-auto ml-5 ">
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/exercises" activeClassName="active">
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
        <div className="flex">
          {!user && (
            <div className="navbar_sign  items-center  hidden lg:flex">
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
          )}

          {user && (
            <Link to="/profile ">
              <CgProfile
                className="ml-5 text-4xl text-gray-100 hover:text-gray-500 hidden lg:block "
                title="profile"
              />
            </Link>
          )}
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
              {user && (
                <div className="flex justify-end">
                <Link to="/profile ">
              <CgProfile
                className="ml-5 text-4xl text-gray-100 hover:text-gray-500 "
                title="profile"
              />
            </Link>
                </div>
           
          )}
                <p>
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/exercises" activeClassName="active">
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
              {!user&&
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
              }

              {user && 
                <button onClick={logout} className="btn">
            Logout
          </button>
              }
                
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
