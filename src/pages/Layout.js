import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

const Layout = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  // const [user, setUser] = useState(localStorage.getItem('email'));
  const user = localStorage.getItem("email");

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  return (
    <>
      <nav className={`main-navbar  ${mobileMenu ? "mobileView" : ""} ${show}`}>
        <div className="mnflex">
          <div className="logo">
            <img src={logo} alt={logo} />
          </div>
          <div className="mdmenu">
            {mobileMenu ? (
              <VscChromeClose onClick={() => setMobileMenu(false)} />
            ) : (
              <SlMenu onClick={openMobileMenu} />
            )}
          </div>
        </div>
        <ul className={mobileMenu ? 'mul' : ''}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/UserProfile">Profile</Link>
              </li>
              <button onClick={logout} className="logout">
                LogOut
              </button>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="logout">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="logout">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
