import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import classes from "./Slider.module.css";

import images from "./data";

const Slider = () => {
  const [imgs] = useState(images);
  const [index, setIndex] = useState(0);

  const checkIndex = (i) => {
    if (i > imgs.length - 1) {
      return 0;
    } else if (i < 0) {
      return imgs.length - 1;
    } else {
      return i;
    }
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(checkIndex(index + 1));
    }, 3000);
    return () => clearInterval(slider);
    // eslint-disable-next-line
  }, [index]);

  return (
    <div className="Container">
      <div className={classes.Slider}>
        <div className={classes.SliderContent}>
          {imgs.map((image, imageIndex) => {
            const { id, img, name } = image;

            let slide = "nextSlide";
            if (imageIndex === index) {
              slide = "activeSlide";
            } else if (
              imageIndex === index - 1 ||
              (index === 0 && imageIndex === imgs.length - 1)
            ) {
              slide = "lastSlide";
            } else {
              slide = "nextSlide";
            }

            return (
              <div key={id} className={slide}>
                <img src={img} alt={name} className={classes.Image} />
              </div>
            );
          })}
          <button
            className={classes.Prev}
            onClick={() => setIndex(checkIndex(index - 1))}
          >
            <FiChevronLeft />
          </button>
          <button
            className={classes.Next}
            onClick={() => setIndex(checkIndex(index + 1))}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
