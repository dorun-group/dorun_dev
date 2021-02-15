import React from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useGlobalContext } from "../../context";

import logo from "../../assets/dorunLogo.svg";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const { path, setIsSidebarOpen } = useGlobalContext();

  return (
    <nav className={classes.Navbar}>
      <div className={classes.container}>
        <div>
          <Link to="/">
            <img src={logo} alt="Dorun Group Logo" className={classes.logo} />
          </Link>
        </div>
        <div className={classes.navLinks_Container}>
          <IconContext.Provider
            value={{ size: "48px", className: classes.hamburger }}
          >
            <BsList onClick={() => setIsSidebarOpen(true)} />
          </IconContext.Provider>
          <ul className={classes.navLinks}>
            <li>
              <Link to="/" className={path === "home" ? "active" : null}>
                home
              </Link>
            </li>
            <li>
              <Link
                to="/corporate"
                className={path === "corporate" ? "active" : null}
              >
                corporate
              </Link>
            </li>
            <li>
              <Link
                to="/business"
                className={path === "business" ? "active" : null}
              >
                business
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={path === "contact" ? "active" : null}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
