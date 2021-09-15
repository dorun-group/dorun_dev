import React from "react";
import classes from "./Footer.module.css";
import { IconContext } from "react-icons";
import { FaAddressCard } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={`Container ${classes.Grey}`}>
        <p className={classes.Text}>
          <IconContext.Provider value={{ size: "30px" }}>
            <BiPhoneCall />
          </IconContext.Provider>
          <p>984-641-7766 || 812-900-5546</p>
        </p>
        <br />
        <p className={classes.Text}>
          <IconContext.Provider value={{ size: "30px" }}>
            <FaAddressCard />
          </IconContext.Provider>
          <p>
            Building 55/534,
            <br />
            Puthurkkara, Ayyanthole. <br /> Thrissur, Kerala.
          </p>
        </p>
        <br />
        <p className={classes.Text}>
          <IconContext.Provider value={{ size: "30px" }}>
            <HiOutlineMail />
          </IconContext.Provider>
          <p>connectdorun@gmail.com</p>
        </p>
        <h1 className={classes.Connect}>CONNECT</h1>
        <a
          href="https://facebook.com/DORUN-GROUP-103547858402781/"
          target="_blank"
          rel="noreferrer"
          className={classes.SocialLink}
        >
          {/* <IconContext.Provider
            value={{ size: "40px", className: classes.SocialLink }}
          >
            <FaFacebookSquare />
          </IconContext.Provider> */}
          <img src={facebook} alt="facebook logo" className={classes.Icon} />
        </a>
        <a
          href="https://instagram.com/dorungroup/"
          target="_blank"
          rel="noreferrer"
          className={classes.SocialLink}
        >
          {/* <IconContext.Provider
            value={{ size: "40px", className: classes.SocialLink }}
          >
            <FaInstagramSquare />
          </IconContext.Provider> */}
          <img src={instagram} alt="instagram logo" className={classes.Icon} />
        </a>
      </div>
      <div className={`Container ${classes.Footer}`}>
        <p>Copyright &#169; 2021 Dorun Group</p>
        <p>All Rights Reserved.</p>
        <br />
        <p>
          Website designed by{" "}
          <a href="https://helloantony.in" target="_blank" rel="noreferrer">
            Antony Chiramel
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
