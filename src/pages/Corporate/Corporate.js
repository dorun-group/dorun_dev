import React, { useEffect, useState } from "react";

import { useGlobalContext } from "../../context";

import classes from "./Corporate.module.css";
import mission from "../../assets/dorun_mission.png";
import Footer from "../../components/Footer/Footer";
import { poly_facts } from "../../facts";

const Corporate = () => {
  const { setPath } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPath("corporate");
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
          <div className={`Container ${classes.Corporate}`}>
            <div className={classes.One}>
              <img
                src={mission}
                alt="4 dustbins with Polyplast written on it"
                className={classes.Image}
              />
              <div>
                <h1 className={classes.Title}>About Us</h1>
                <p className={classes.Text}>
                  Dorun Group is a young venture, founded by two young
                  visionaries Bastin Ainikkal and Vinod Kumar. Dorun is PAN
                  India supplier of poly-plast products, world class Builders
                  and Developers and best in the market Real-estate brokers. Our
                  clients can provide testimonials on the values we uphold, ie.
                  trust and hardwork.
                </p>
              </div>
            </div>
            <div className={classes.Two}>
              <div>
                <hr className={classes.LineBreak} />
                <h1 className={classes.Title}>Our Vision & Mission</h1>
                <p className={classes.Text}>
                  To become a global brand that promotes innovation and to
                  become the go-to company to meet the global needs of
                  infrastructure and engineering, all of this by upholding our
                  values of trust, integrity and hardwork.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default Corporate;
