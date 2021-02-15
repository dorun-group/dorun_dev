import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
import classes from "./Polyplast.module.css";
import polyplast_img from "../../assets/slider_polyplast.png";
import Footer from "../../components/Footer/Footer";
import { poly_facts } from "../../facts";

const Polyplast = () => {
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
          <div className={`Container ${classes.Polyplast}`}>
            <img
              src={polyplast_img}
              alt="4 dustbins with Polyplast written on it"
              className={classes.Image}
            />
            <div>
              <h1 className={classes.Title}>Dorun Polyplast</h1>
              <p className={classes.Text}>
                Our product range includes a wide range of Plastic Granules such
                as Polypropylene Granule(PP), High Density Polyethylene (HDPE)
                Granules, Low Density Polyethylene (LDPE), Acrylonitrile
                Butadiene Styrene (ABS), Nylon 6 & 66 Granules, EVA Granules and
                many more items.
              </p>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default Polyplast;
