import React, { useEffect } from "react";

import { useGlobalContext } from "../../context";

import classes from "./Error.module.css";
import { Link } from "react-router-dom";

const Error = () => {
  const { setPath } = useGlobalContext();

  useEffect(() => {
    setPath("error");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Parent">
      <div className={`Container ${classes.Error}`}>
        <h1>404</h1>
        <h3>Oops! You are lost</h3>
        <Link to="/">Go Home</Link>
      </div>
    </div>
  );
};

export default Error;
