import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import classes from "./RealEstate.module.css";
import Footer from "../../components/Footer/Footer";
import realEstate_img from "../../assets/slider_realEstate.png";
import { real_facts } from "../../facts";

const RealEstate = () => {
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
          <h3>{real_facts[Math.floor(Math.random() * 2)]}</h3>
          <div className="loading"></div>
        </div>
      ) : (
        <React.Fragment>
          <div className={`Container ${classes.RealEstate}`}>
            <img
              src={realEstate_img}
              alt="A living room"
              className={classes.Image}
            />
            <div>
              <h1 className={classes.Title}>Dorun Real-estate</h1>
              <p className={classes.Text}>
                Find your next dream home with Dorun. We assure you an
                hassel-free relocation strategy so you can settle down
                peacefully. With a wide range of properties to choose from, your
                ideal livelihood is not far away. Ready to move in apartments,
                plots for construction, farming lands for your retirement hobby,
                we offer you and your loved ones a wide variety of real-estate
                options to choose from.
              </p>
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default RealEstate;
