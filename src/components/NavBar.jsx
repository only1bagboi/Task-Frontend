import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import navLogo from "../assets/image/navBar.png";
import fineGirl from "../assets/image/finegirl.png.png";

const NavBar = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);

  const allNavLinks = () => {
    return location.pathname === "/" ? (
      <>
        <Link to="/new"> New Task</Link>
        <Link to="/tasks">All Tasks</Link>
      </>
    ) : location.pathname === "/tasks" ? (
      <Link to="/new">New Task</Link>
    ) : location.pathname === "/new" ? (
      <Link to="/tasks">All Tasks</Link>
    ) : location.pathname === "/new" || location.pathname === "/edit" ? (
      <Link to="/tasks">All Tasks</Link>
    ) : null;
  };

  return (
    <div className="nav-con">
      <nav className="d-flex align-items-center justify-content-between">
        <Link to="/">
          <img src={navLogo} alt="" />
        </Link>
        <div className="d-flex align-items-center justify-content-between inner-nav">
          {allNavLinks()}
          <img src={fineGirl} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
