import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/fitness_logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { auth } from "../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import "./navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Function to return styles based on isActive
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#ff0000 " : "white",
  });

  return (
    <>
      <nav className="navbar top-0 bg-red-950 fixed w-full z-50 py-[0.5rem] px-4 md:px-[6rem] flex justify-between items-center border-b-2 border-red-950">
        {/* Navbar Links */}
        <div className="navbar_links flex items-center">
          <div className="logo">
            <img src={logo} width={80} alt="logo" />
          </div>

          <ul className="navbar_links_container hidden gap-4 text-white text-xl lg:flex row-auto ml-5">
            <li>
              <NavLink to="/" style={navLinkStyles}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/exercises" style={navLinkStyles}>
                Exercises
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" style={navLinkStyles}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" style={navLinkStyles}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Sign In / Profile / Sign Up */}
        <div className="flex items-center">
          {!user ? (
            <div className="navbar_sign hidden lg:flex items-center">
              <Link to="/login">
                <p className="text-white mr-5">Sign in</p>
              </Link>
              <button
                type="button"
                onClick={() => navigate("/signUp")}
                className="btn text-white"
              >
                Sign up
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <CgProfile
                  className="text-4xl text-gray-100 hover:text-gray-500 hidden lg:block"
                  title="Profile"
                />
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="menu    justify-between lg:hidden ml-2">
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
            <div className="menu_container absolute bg-red-950 pl-20 pr-4 py-4 right-1 rounded-2 flex flex-col justify-end items-end text-end">
              <div className="menu_container_links scale-up-center text-xl font-bold">
                {user && (
                  <div className="flex justify-end mb-4">
                    <Link to="/profile">
                      <CgProfile
                        className="text-4xl text-gray-100 hover:text-gray-500"
                        title="Profile"
                      />
                    </Link>
                  </div>
                )}
                <p>
                  <NavLink to="/" style={navLinkStyles}>
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/exercises" style={navLinkStyles}>
                    Exercises
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/about" style={navLinkStyles}>
                    About Us
                  </NavLink>
                </p>
                <p>
                  <NavLink to="/contact" style={navLinkStyles}>
                    Contact
                  </NavLink>
                </p>

                {!user && (
                  <div className="menu_sign flex flex-col items-end gap-2 mt-4">
                    <Link to="/login">
                      <p>Sign in</p>
                    </Link>
                    <button
                      type="button"
                      onClick={() => navigate("/signUp")}
                      className="btn btn-lg btn-primary btn-login text-white"
                    >
                      Sign up
                    </button>
                  </div>
                )}
                {user && (
                  <button
                    onClick={logout}
                    className="btn mt-4 text-white"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
