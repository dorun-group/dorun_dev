import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import builders_img from "../../assets/slider_builders.png";
import Footer from "../../components/Footer/Footer";
import classes from "./Builders.module.css";
import { builders_facts } from "../../facts";

const Builders = () => {
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
          <h3>{builders_facts[Math.floor(Math.random() * 2)]}</h3>
          <div className="loading"></div>
        </div>
      ) : (
        <React.Fragment>
          <div className={`Container ${classes.Builders}`}>
            <img
              src={builders_img}
              alt="4 dustbins with Polyplast written on it"
              className={classes.Image}
            />
            <div>
              <h1 className={classes.Title}>Dorun Builders & Developers</h1>
              <p className={classes.Text}>
                We are experts in building premium residential and commercial
                projects, which radiates elegance. At Dorun we cater to your
                needs and the final project will exceed your expectation. We
                undertake every aspect of your dream project, from the master
                plan, development strategy, architecture, location, property
                management; down to every hinge, tile and square inch.
              </p>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default Builders;
