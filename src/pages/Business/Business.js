import React, { useEffect, useState } from "react";

import { useGlobalContext } from "../../context";

import classes from "./Business.module.css";
import Footer from "../../components/Footer/Footer";
import { poly_facts } from "../../facts";
import business from "../../assets/business_dorun.png";
import { Link } from "react-router-dom";

const Business = () => {
  const { setPath } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPath("business");
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Parent">
      {loading ? (
        <div className={`Container ${classes.Loading}`}>
          <h1>Dorun Fact!</h1>
          <h3>{poly_facts[Math.floor(Math.random() * 3)]}</h3>
          <div className="loading"></div>
        </div>
      ) : (
        <React.Fragment>
          <div className={`Container ${classes.Business}`}>
            <img
              src={business}
              alt="4 dustbins with Polyplast written on it"
              className={classes.Image}
            />
            <div>
              <h1 className={classes.Title}>Our Business Sectors</h1>
              <Link to="/polyplast" className={classes.Link}>
                <div className={classes.Point}></div>Dorun Polyplast
              </Link>
              <div className={classes.Services}>
                <p>Polypropylene-PP (white, natural, black etc) Chips and Scraps</p>
                <p>High Density Polyethylene (HDPE) Chips and Scraps</p>
                <p>Low Density Polyethylene (LDPE) Chips and Scraps</p>
                <p>Acrylonitrile Butadiene Styrene (ABS) Chips and Scraps</p>
                <p>EVA Chips and Scraps</p>
                <p>PET Bottles</p>
                <p>Variety of Cover Materials</p>
              </div>
              <Link to="/builders" className={classes.Link}>
                <div className={classes.Point}></div>Dorun Builders & Developers
              </Link>
              <div className={classes.Services}>
                <p>Commercial Spaces</p>
                <p>Residentail Apartments</p>
                <p>Ready Homes</p>
                <p>Luxury Homes</p>
              </div>
              <Link to="/realestate" className={classes.Link}>
                <div className={classes.Point}></div>Dorun Real-estate
              </Link>
              <div className={classes.Services}>
                <p>Purchase your dream plot</p>
                <p>Plots for farming</p>
                <p>Ready spaces for business</p>
                <p>Land Ownership, great flexibility and No Delay</p>
              </div>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default Business;
