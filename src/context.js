import React, { useState, useContext } from "react";
import emailjs, { init } from "emailjs-com";
import validator from "validator";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [path, setPath] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    number: "",
    text: "",
  });
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    init("user_D4XN82ecP5Ekux1tqkAxt");

    if (message.name === "") {
      setIsError(true);
      setError("Please provide your name");
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 3000);
      return;
    }

    if (!validator.isEmail(message.email)) {
      setIsError(true);
      setError("Please provide a valid email");
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 3000);
      return;
    }

    if (message.number.length > 10 || message.number.length < 10) {
      setIsError(true);
      setError("Please provide a valid contact number");
      setTimeout(() => {
        setIsError(false);
        setError("");
      }, 3000);
      return;
    }

    setIsError(false);
    let templateParams = {
      to_email: message.email,
      to_name: message.name,
    };
    let messageParams = {
      from_name: message.name,
      from_email: message.email,
      from_contact: message.number,
      from_message: message.text,
    };

    emailjs.send("service_npnj8hc", "template_ebkzz9o", messageParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        if (response.status === 200) {
          emailjs
            .send("service_npnj8hc", "template_sj2mxnk", templateParams)
            .then(
              function (response) {
                console.log("SUCCESS!", response.status, response.text);
              },
              function (error) {
                console.log("FAILED...", error);
              }
            );
        }
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );

    setMessage((oldState) => {
      return { ...oldState, name: "", email: "", number: "", text: "" };
    });
    setIsError(true);
    setError(`Hey ${message.name}, we have sent you an email`);
    setTimeout(() => {
      setIsError(false);
      setError("");
    }, 5000);
    return;
  };

  return (
    <AppContext.Provider
      value={{
        path,
        setPath,
        isSidebarOpen,
        setIsSidebarOpen,
        message,
        setMessage,
        isError,
        error,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
