import React from "react";
import classes from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className="Container">
      <hr className={classes.Line} />
      <h1 className={classes.Heading}>Testimonials</h1>
      <div className={classes.Testimonial}>
        <div>
          <p className={classes.Content}>
            "Congratulations on your new venture, Dorun Polyplast! It sounds
            like an exciting opportunity, and I'm looking forward to watching
            your progress as the plastic recycling business develops."
          </p>
          <br />
          <p className={classes.Content}>- Varghese Kandamkulathy</p>
          <div className={classes.designation}>
            <p>Chairman</p>
            <p>
              Development Standing Committee <br /> Thrissur Municipal
              Corporation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
