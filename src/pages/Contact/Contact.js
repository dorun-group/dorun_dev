import React, { useEffect, useState } from "react";

import { useGlobalContext } from "../../context";
import Footer from "../../components/Footer/Footer";

import classes from "./Contact.module.css";

const Contact = () => {
  const { setPath, message, setMessage, handleSubmit, isError, error } =
    useGlobalContext();

  const [word, setWord] = useState("Say Hi!");

  useEffect(() => {
    setPath("contact");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Parent">
      <div className={`Container ${classes.Contact}`}>
        <h1 className={classes.Heading}>Hello! {message.name}</h1>
        <form className={classes.InputForm}>
          <input
            type="text"
            name="name"
            className={classes.Input}
            placeholder="name (required)"
            value={message.name}
            onChange={(e) => {
              setMessage({ ...message, name: e.target.value });
            }}
          />
          <input
            name="email"
            className={classes.Input}
            placeholder="email (required)"
            type="email"
            value={message.email}
            onChange={(e) => {
              setMessage({ ...message, email: e.target.value });
            }}
          />
          <input
            name="contact"
            className={classes.Input}
            placeholder="contact number (required)"
            type="text"
            value={message.number}
            onChange={(e) => {
              setMessage({ ...message, number: e.target.value });
            }}
          />
          <textarea
            name="message"
            className={classes.TextArea}
            placeholder="your message"
            value={message.text}
            onChange={(e) => {
              setMessage({ ...message, text: e.target.value });
            }}
          ></textarea>
          <p className={classes.Error}>{isError ? error : null}</p>
          <button
            type="submit"
            className={classes.SubmitBtn}
            onMouseEnter={() => setWord("Let's talk Business!")}
            onMouseLeave={() => setWord("Say Hi!")}
            onClick={(e) => handleSubmit(e)}
            disabled={isError}
          >
            {word}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
