import React from "react";
import "../stylesheets/Footer.css";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import GitHub from "../assets/github.svg";
import Inbox from "../assets/inbox.svg";
import LinkedIn from "../assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img className="social-handle" src={Facebook} />
      <img className="social-handle" src={Twitter} />
      <img className="social-handle" src={LinkedIn} />
      <img className="social-handle" src={GitHub} />
      <img className="social-handle" src={Inbox} />
    </footer>
  );
}
