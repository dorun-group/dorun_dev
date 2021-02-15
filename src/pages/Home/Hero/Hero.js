import React from "react";
import Jump from "react-reveal/Jump";
import { Link } from "react-router-dom";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={`Container ${classes.Hero}`}>
      <h1>We Bring</h1>
      <Jump>
        <h1 className={classes.Blue}>Change</h1>
      </Jump>
      <p className={classes.Para}>
        At Dorun, we believe every business has its own purity and sacredness,
        and when done right it can change the world. Come join hands with the
        Dorun family and let's play a small role in making this world a better
        place.
      </p>
      <Link to="/contact">
        <button className={classes.Button}>Contact Us</button>
      </Link>
    </div>
  );
};

export default Hero;
