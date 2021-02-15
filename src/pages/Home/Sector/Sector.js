import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import polyplast from "../../../assets/sector_polyplast.png";
import builders from "../../../assets/sector_builders.png";
import realEstate from "../../../assets/sector_realEstate.png";
import classes from "./Sector.module.css";

const Sector = () => {
  return (
    <div className="Container" style={{ margin: "2rem 0" }}>
      <hr className={classes.Line} />
      <h1 className={classes.Heading}>Business Sector</h1>
      <br />
      <div className={classes.Section}>
        <Zoom bottom>
          <Link to="/polyplast">
            <img
              src={polyplast}
              alt="PPE Granules are used to make insulation for electric wires"
              className={classes.Image}
            />
          </Link>
        </Zoom>
        <Zoom bottom>
          <Link to="/builders">
            <img src={builders} alt="A city scape" className={classes.Image} />
          </Link>
        </Zoom>
        <Zoom bottom>
          <Link to="/realestate">
            <img
              src={realEstate}
              alt="A dining table with 3 chairs"
              className={classes.Image}
            />
          </Link>
        </Zoom>
      </div>
    </div>
  );
};

export default Sector;
