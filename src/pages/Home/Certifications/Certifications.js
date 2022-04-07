import React from "react";
import msmeLogo from "../../../assets/msme_logo.png";
import classes from "./Certifications.module.css";

const Certifications = () => {
  return (
    <div className="Container">
      <div className={classes.certifications}>
        <img src={msmeLogo} alt="msme logo" />
      </div>
    </div>
  );
};

export default Certifications;
