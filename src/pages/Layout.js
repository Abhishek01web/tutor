import { Outlet, Link, useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png';
import { useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(localStorage.getItem('email'));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  }

  return (
    <>
      <nav className="main-navbar">
        <div className="logo">
          <img src={logo} alt={logo} />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/courses">courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {user ?
            <button onClick={logout} className="logout">LogOut</button>
            :
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          }
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;