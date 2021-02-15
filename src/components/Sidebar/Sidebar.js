import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { IoCloseSharp } from "react-icons/io5";
import { useGlobalContext } from "../../context";

import logo from "../../assets/dorunLogo.svg";

import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const { path, isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <nav className={isSidebarOpen ? classes.displaySidebar : classes.Sidebar}>
      <div className={classes.container}>
        <Link to="/" onClick={() => setIsSidebarOpen(false)}>
          <img src={logo} alt="Dorun Group Logo" className={classes.logo} />
        </Link>
        <IconContext.Provider
          value={{ size: "48px", className: classes.closeIcon }}
        >
          <IoCloseSharp onClick={() => setIsSidebarOpen(false)} />
        </IconContext.Provider>
        <ul className={classes.navLinks}>
          <li>
            <Link
              to="/"
              className={path === "home" ? "active" : null}
              onClick={() => setIsSidebarOpen(false)}
            >
              home
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/corporate"
              className={path === "corporate" ? "active" : null}
              onClick={() => setIsSidebarOpen(false)}
            >
              corporate
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/business"
              className={path === "business" ? "active" : null}
              onClick={() => setIsSidebarOpen(false)}
            >
              business
            </Link>
          </li>
          <hr />
          <li>
            <Link
              to="/contact"
              className={path === "contact" ? "active" : null}
              onClick={() => setIsSidebarOpen(false)}
            >
              contact
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
